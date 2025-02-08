import boto3
import smtplib
from azure.identity import ClientSecretCredential
from azure.mgmt.costmanagement import CostManagementClient
from datetime import datetime, timedelta

# Fetch AWS costs using AWS Cost Explorer API (Last 24 hours)
def get_aws_last_24_hours_cost():
    client = boto3.client('ce', region_name='us-east-1')
    end_date = datetime.today().date()  # Today
    start_date = end_date - timedelta(days=1)  # 24 hours ago
    
    response = client.get_cost_and_usage(
        TimePeriod={'Start': str(start_date), 'End': str(end_date)},
        Granularity='DAILY',
        Metrics=['BlendedCost']
    )
    
    aws_costs = {}
    for result in response['ResultsByTime']:
        for group in result['Groups']:
            resource = group['Keys'][0]
            cost = float(group['Metrics']['BlendedCost']['Amount'])
            aws_costs[resource] = cost

    return aws_costs

# Fetch AWS costs for the current month (Day 1 to Today)
def get_aws_monthly_cost():
    client = boto3.client('ce', region_name='us-east-1')
    start_date = datetime.today().replace(day=1)  # First day of the current month
    end_date = datetime.today().date()  # Today
    
    response = client.get_cost_and_usage(
        TimePeriod={'Start': str(start_date), 'End': str(end_date)},
        Granularity='DAILY',
        Metrics=['BlendedCost']
    )
    
    aws_costs = {}
    for result in response['ResultsByTime']:
        for group in result['Groups']:
            resource = group['Keys'][0]
            cost = float(group['Metrics']['BlendedCost']['Amount'])
            aws_costs[resource] = cost

    return aws_costs

# Fetch Azure costs using Azure Cost Management API (Last 24 hours)
def get_azure_last_24_hours_cost():
    credentials = ClientSecretCredential(
        tenant_id='YOUR_TENANT_ID',
        client_id='YOUR_CLIENT_ID',
        client_secret='YOUR_CLIENT_SECRET'
    )
    client = CostManagementClient(credentials, subscription_id='YOUR_SUBSCRIPTION_ID')

    end_date = datetime.today().date()
    start_date = end_date - timedelta(days=1)  # Last 24 hours
    
    # Fetch cost data from Azure
    scope = f"/subscriptions/{your_subscription_id}"
    response = client.query.usage(
        scope=scope,
        time_period={'from': str(start_date), 'to': str(end_date)},
        granularity='Daily'
    )

    azure_costs = {}
    for item in response.value:
        resource = item['name']
        cost = float(item['properties']['totalCost'])
        azure_costs[resource] = cost

    return azure_costs

# Fetch Azure costs for the current month (Day 1 to Today)
def get_azure_monthly_cost():
    credentials = ClientSecretCredential(
        tenant_id='YOUR_TENANT_ID',
        client_id='YOUR_CLIENT_ID',
        client_secret='YOUR_CLIENT_SECRET'
    )
    client = CostManagementClient(credentials, subscription_id='YOUR_SUBSCRIPTION_ID')

    start_date = datetime.today().replace(day=1)  # First day of the current month
    end_date = datetime.today().date()  # Today
    
    # Fetch cost data from Azure
    scope = f"/subscriptions/{your_subscription_id}"
    response = client.query.usage(
        scope=scope,
        time_period={'from': str(start_date), 'to': str(end_date)},
        granularity='Daily'
    )

    azure_costs = {}
    for item in response.value:
        resource = item['name']
        cost = float(item['properties']['totalCost'])
        azure_costs[resource] = cost

    return azure_costs

# Send email alert if the cost has increased by $100
def send_alert(increased_cost, account):
    sender_email = "your_email@example.com"
    receiver_email = "recipient_email@example.com"
    password = "your_email_password"
    
    subject = f"ALERT: {account} Cost Increased by ${increased_cost}"
    body = f"The daily cost of {account} increased by ${increased_cost} today."

    # Send email
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, password)
            message = f"Subject: {subject}\n\n{body}"
            server.sendmail(sender_email, receiver_email, message)
        print("Alert email sent!")
    except Exception as e:
        print(f"Failed to send email: {str(e)}")

# Main function to compare costs and send alerts
def main():
    # Last 24 hours cost
    aws_last_24_hours = get_aws_last_24_hours_cost()
    azure_last_24_hours = get_azure_last_24_hours_cost()

    # Cumulative cost for the current month (Day 1 to Today)
    aws_monthly_cost = get_aws_monthly_cost()
    azure_monthly_cost = get_azure_monthly_cost()

    # Display last 24 hours costs
    print("AWS Last 24 Hours Costs:")
    for resource, cost in aws_last_24_hours.items():
        print(f"{resource}: ${cost}")
    
    print("\nAzure Last 24 Hours Costs:")
    for resource, cost in azure_last_24_hours.items():
        print(f"{resource}: ${cost}")

    # Display monthly cumulative costs (Day 1 to Today)
    aws_total_cost = sum(aws_monthly_cost.values())
    azure_total_cost = sum(azure_monthly_cost.values())

    print(f"\nAWS Total Cost (Day 1 to {datetime.today().day}): ${aws_total_cost}")
    print(f"Azure Total Cost (Day 1 to {datetime.today().day}): ${azure_total_cost}")

    # Check if the cost increase is greater than $100 (optional)
    previous_day_cost = 100  # This could be fetched from your database
    for resource, cost in aws_last_24_hours.items():
        if abs(cost - previous_day_cost) > 100:
            send_alert(cost - previous_day_cost, "AWS")
    
    for resource, cost in azure_last_24_hours.items():
        if abs(cost - previous_day_cost) > 100:
            send_alert(cost - previous_day_cost, "Azure")

if __name__ == "__main__":
    main()
