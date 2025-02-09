import requests

response = requests.get('https://api.github.com/repos/kubernetes/kubernetes/pulls')
pull_requests = response.json()

for pr in range(len(pull_requests)) :
    print(pull_requests[pr]['title'])
    print(pull_requests[pr]['user']['login'])
    print(pull_requests[pr]['created_at'])
    print(pull_requests[pr]['html_url'])
    print("-------------------------------------------------")
if response.status_code == 200:
    # Convert the JSON response to a dictionary
    pull_requests = response.json()

    # Create an empty dictionary to store PR creators and their counts
    pr_creators = {}

    # Iterate through each pull request and extract the creator's name
    for pull in pull_requests:
        creator = pull['user']['login']
        if creator in pr_creators:
            pr_creators[creator] += 1 # Increment count for existing creator -->value
        else:
            pr_creators[creator] = 1  # Initialize count to 1 for new creator -->key

    # Display the dictionary of PR creators and their counts
    print("PR Creators and Counts:")
    for creator, count in pr_creators.items(): #items() method returns a view object that displays a list of a given dictionary's key-value tuple pair.
        print(f"{creator}: {count} PR(s)")
else:
    print(f"Failed to fetch data. Status code: {response.status_code}")