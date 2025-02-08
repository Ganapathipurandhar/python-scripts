import sys

def addition(n1, n2):
    return n1 + n2

def subtraction(n1, n2):
    return n1 - n2

def multiplication(n1, n2):
    return n1 * n2

def division(n1, n2):
    return n1 / n2 if n2 != 0 else "Error: Division by zero"

# Dictionary to map operations
operations = {
    "add": addition,
    "sub": subtraction,
    "mul": multiplication,
    "div": division
}

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python script.py <num1> <operator> <num2>")
        sys.exit(1)

    try:
        n1, operator, n2 = float(sys.argv[1]), sys.argv[2], float(sys.argv[3])
        if operator in operations:
            print(operations[operator](n1, n2))
        else:
            print("Error: Invalid operator. Use 'add', 'sub', 'mul', or 'div'.")
    except ValueError:
        print("Error: Please provide valid numbers.")


        
    #         1️⃣ What is __name__ in Python?
    #        __name__ is a special built-in variable in Python.
    #        When a script is run, Python automatically assigns a value to __name__.
    # The value of __name__ depends on how the script is being executed:
    # If the script is run directly, __name__ is set to "__main__".
    # If the script is imported into another script, __name__ is set to the script's filename (module name) without .py.
        
