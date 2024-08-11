'use client'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import CodeSnippet from './CodeSnippet'
import Footer from './Footer'

const navigation = [
  { name: 'Beginner', href: '/learn' },
  { name: 'Intermediate', href: '/underprogress' },
  { name: 'Advanced', href: '/underprogress' },
  { name: 'Projects', href: '/underprogress' },
]

export default function Learn() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const infoData = {
    // Welcome: 'Select a language and start learning!',
    Python: [
      {
        "topic": "Introduction",
        "details": "Python is a high-level, interpreted programming language. Created by Guido van Rossum and first released in 1991. Known for its easy-to-read syntax and dynamic typing.",
        "CodeSnippet":
          `
          # A simple Python program
          print("Hello, World!")
          `
      },
      {
        "topic": "Variables and Data Types",
        "details": "Variables store data values and are created by assignment. Common data types include int (integer), float (floating point number), str (string), and bool (boolean). Python uses dynamic typing, so the type of a variable is determined at runtime.",
        "CodeSnippet":
          `
          # Variables and data types
          integer_variable = 10        # int
          float_variable = 20.5        # float
          string_variable = "Python"   # str
          boolean_variable = True      # bool
  
          # Output the types
          print(type(integer_variable))
          print(type(float_variable))
          print(type(string_variable))
          print(type(boolean_variable))
          `
      },
      {
        "topic": "Operators",
        "details": "Arithmetic operators: +, -, *, /, %, **, //. Comparison operators: ==, !=, >, <, >=, <=. Logical operators: and, or, not. Assignment operators: =, +=, -=, *=, /=, etc.",
        "CodeSnippet":
          `
          # Arithmetic operators
          a = 10
          b = 3
          print(a + b)  # Addition
          print(a - b)  # Subtraction
          print(a * b)  # Multiplication
          print(a / b)  # Division
          print(a % b)  # Modulus
          print(a ** b) # Exponentiation
          print(a // b) # Floor division
  
          # Comparison operators
          print(a == b)  # Equal to
          print(a != b)  # Not equal to
          print(a > b)   # Greater than
          print(a < b)   # Less than
          print(a >= b)  # Greater than or equal to
          print(a <= b)  # Less than or equal to
  
          # Logical operators
          print(a > 5 and b < 5)  # Logical AND
          print(a > 5 or b < 1)   # Logical OR
          print(not(a > 5))       # Logical NOT
  
          # Assignment operators
          c = 5
          c += 3  # c = c + 3
          print(c)
          `
      },
      {
        "topic": "Control Flow",
        "details": "Conditional statements: if, elif, else. Loops: for loop, while loop. Break and continue: used to exit a loop or skip an iteration.",
        "CodeSnippet":
          `
          # Conditional statements
          x = 10
          if x > 0:
              print("Positive")
          elif x == 0:
              print("Zero")
          else:
              print("Negative")
  
          # Loops
          for i in range(5):
              print(i)  # For loop
  
          count = 0
          while count < 5:
              print(count)
              count += 1  # While loop
  
          # Break and continue
          for i in range(10):
              if i == 3:
                  continue  # Skip the rest of the loop at index 3
              if i == 7:
                  break  # Exit the loop when i is 7
              print(i)
          `
      },
      {
        "topic": "Functions",
        "details": "Functions are defined using the def keyword. Functions can accept arguments and return values. Python also supports lambda (anonymous) functions.",
        "CodeSnippet":
          `
          # Function definition
          def greet(name):
              return f"Hello, {name}!"
  
          print(greet("Tanmay"))
  
          # Lambda function
          square = lambda x: x ** 2
          print(square(5))
          `
      },
      {
        "topic": "Lists and Tuples",
        "details": "Lists are ordered, mutable collections of items defined with square brackets []. Tuples are ordered, immutable collections of items defined with parentheses (). Both lists and tuples can hold mixed data types.",
        "CodeSnippet":
          `
          # Lists
          fruits = ["apple", "banana", "cherry"]
          fruits.append("orange")  # Adding an item
          print(fruits)
          fruits[1] = "blueberry"  # Modifying an item
          print(fruits)
  
          # Tuples
          numbers = (1, 2, 3)
          print(numbers[0])  # Accessing an item
  
          # Tuple unpacking
          a, b, c = numbers
          print(a, b, c)
          `
      },
      {
        "topic": "Dictionaries",
        "details": "Dictionaries are unordered collections of key-value pairs defined with curly braces {}. Keys must be unique and can be of any immutable data type. Values can be of any data type and can be accessed via keys.",
        "CodeSnippet":
          `
          # Dictionary
          person = {"name": "Tanmay", "age": 20, "city": "East Lansing"}
          print(person["name"])  # Accessing a value
  
          # Modifying a value
          person["age"] = 21
          print(person)
  
          # Adding a new key-value pair
          person["email"] = "tanmay@example.com"
          print(person)
  
          # Iterating through keys and values
          for key, value in person.items():
              print(f"{key}: {value}")
          `
      },
      {
        "topic": "Sets",
        "details": "Sets are unordered collections of unique items defined with curly braces {}. Common operations include union, intersection, and difference. Useful for membership testing and removing duplicates.",
        "CodeSnippet":
          `
          # Set
          numbers = {1, 2, 3, 4, 5}
          print(numbers)
  
          # Adding and removing elements
          numbers.add(6)
          numbers.remove(3)
          print(numbers)
  
          # Set operations
          even_numbers = {2, 4, 6, 8}
          print(numbers.union(even_numbers))     # Union
          print(numbers.intersection(even_numbers))  # Intersection
          print(numbers.difference(even_numbers))    # Difference
          `
      },
      {
        "topic": "Input and Output",
        "details": "Input is taken using the input() function. Output is printed using the print() function. Formatted strings can be used with f-strings or the format() method.",
        "CodeSnippet":
          `
          # Input
          name = input("Enter your name: ")
          print(f"Hello, {name}!")
  
          # Output
          age = 20
          print(f"I am {age} years old.")  # Using f-strings
  
          # Formatted string with format() method
          print("I am {} years old.".format(age))
          `
      },
      {
        "topic": "File Handling",
        "details": "Files can be opened using the open() function and modes like 'r', 'w', 'a', and 'b'. Common file operations include read(), write(), and close(). The with statement is used for better file handling practices to ensure files are closed properly.",
        "CodeSnippet":
          `
          # File handling using 'with'
          with open("sample.txt", "w") as file:
              file.write("Hello, World!")
  
          # Reading a file
          with open("sample.txt", "r") as file:
              content = file.read()
              print(content)
          `
      },
      {
        "topic": "Error Handling",
        "details": "Errors in Python are handled using try, except, else, and finally blocks. Common exceptions include ValueError, TypeError, and IndexError. Custom exceptions can be created using the raise keyword.",
        "CodeSnippet":
          `
          # Error handling
          try:
              x = int(input("Enter a number: "))
              result = 10 / x
          except ValueError:
              print("Invalid input, please enter a number.")
          except ZeroDivisionError:
              print("Cannot divide by zero!")
          else:
              print(f"Result: {result}")
          finally:
              print("End of error handling.")
          `
      },
      {
        "topic": "Modules and Packages",
        "details": "Modules are files containing Python code, which can be imported using the import statement. Standard library modules like os, sys, and math provide additional functionality. Packages are directories containing multiple modules and an __init__.py file.",
        "CodeSnippet":
          `
          # Importing a module
          import math
  
          # Using a module
          print(math.sqrt(16))  # Square root function from math module
  
          # Importing a specific function
          from math import factorial
          print(factorial(5))  # Factorial function
          `
      },
      {
        "topic": "Object-Oriented Programming (OOP)",
        "details": "Classes are defined using the class keyword and can contain methods and attributes. Objects are instances of classes. OOP concepts include inheritance, encapsulation, and polymorphism.",
        "CodeSnippet":
          `
          # Class definition
          class Dog:
              def __init__(self, name, age):
                  self.name = name
                  self.age = age
              
              def bark(self):
                  return "Woof!"
  
          # Creating an object
          dog1 = Dog("Buddy", 5)
          print(dog1.name)
          print(dog1.bark())
  
          # Inheritance
          class Bulldog(Dog):
              def bark(self):
                  return "Woof! Woof!"
  
          bulldog = Bulldog("Max", 3)
          print(bulldog.bark())
          `
      },
      {
        "topic": "List Comprehensions",
        "details": "A concise way to create lists using a single line of code. Syntax: [expression for item in iterable if condition]. Useful for filtering and transforming lists.",
        "CodeSnippet":
          `
          # List comprehension
          squares = [x ** 2 for x in range(10)]
          print(squares)
  
          # List comprehension with a condition
          even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
          print(even_squares)
          `
      },
      {
        "topic": "Lambda Functions",
        "details": "Anonymous functions created using the lambda keyword. Syntax: lambda arguments: expression. Commonly used in higher-order functions like map(), filter(), and reduce().",
        "CodeSnippet":
          `
          # Lambda function
          multiply = lambda a, b: a * b
          print(multiply(5, 6))
  
          # Using lambda with map()
          numbers = [1, 2, 3, 4, 5]
          squared_numbers = list(map(lambda x: x ** 2, numbers))
          print(squared_numbers)
          `
      },
      {
        "topic": "Common Built-in Functions",
        "details": "len() - returns the length of an object. range() - generates a sequence of numbers. enumerate() - returns both the index and value as you loop through an iterable. zip() - combines multiple iterables into tuples.",
        "CodeSnippet":
          `
          # len()
          fruits = ["apple", "banana", "cherry"]
          print(len(fruits))
  
          # range()
          for i in range(5):
              print(i)
  
          # enumerate()
          for index, fruit in enumerate(fruits):
              print(index, fruit)
  
          # zip()
          numbers = [1, 2, 3]
          names = ["one", "two", "three"]
          zipped = zip(numbers, names)
          print(list(zipped))
          `
      },
      {
        "topic": "Decorators",
        "details": "A decorator is a function that wraps another function to modify its behavior. Used for logging, enforcing access control, instrumentation, caching, etc. Syntax: @decorator_function above the target function.",
        "CodeSnippet":
          `
          # Decorator function
          def my_decorator(func):
              def wrapper():
                  print("Something is happening before the function is called.")
                  func()
                  print("Something is happening after the function is called.")
              return wrapper
  
          @my_decorator
          def say_hello():
              print("Hello!")
  
          say_hello()
          `
      },
      {
        "topic": "Generators",
        "details": "Generators are a type of iterable, like lists or tuples, but generate items on the fly. Created using functions and the yield keyword. Efficient for large datasets as they produce items one at a time.",
        "CodeSnippet":
          `
          # Generator function
          def countdown(n):
              while n > 0:
                  yield n
                  n -= 1
  
          # Using the generator
          for number in countdown(5):
              print(number)
          `
      },
      {
        "topic": "Conclusion",
        "details": "Python is versatile and widely used in various fields like web development, data science, automation, and AI. Strong community support and an extensive ecosystem of libraries. Understanding the basics opens doors to more advanced topics and frameworks.",
        "CodeSnippet":
          `
          # Python's versatility
          print("Python is widely used in various fields like web development, data science, automation, and AI.")
          `
      }
    ],

    Cpp: [
      {
        "topic": "Introduction",
        "details": "C++ is a high-performance, compiled programming language developed by Bjarne Stroustrup as an extension of C. First released in 1985, it supports both procedural and object-oriented programming paradigms.",
        "CodeSnippet":
          `
        // A simple C++ program
        #include <iostream>

        int main() {
            std::cout << "Hello, World!" << std::endl;
            return 0;
        }
        `
      },
      {
        "topic": "Variables and Data Types",
        "details": "Variables store data values and are defined by specifying the type and the name. Common data types include int (integer), float (floating point number), double, char (character), and bool (boolean). C++ is statically typed, meaning the type of a variable is known at compile-time.",
        "CodeSnippet":
          `
        // Variables and data types
        int integer_variable = 10;       // int
        float float_variable = 20.5;     // float
        double double_variable = 30.99;  // double
        char char_variable = 'A';        // char
        bool boolean_variable = true;    // bool

        // Output the variables
        std::cout << "Integer: " << integer_variable << std::endl;
        std::cout << "Float: " << float_variable << std::endl;
        std::cout << "Double: " << double_variable << std::endl;
        std::cout << "Char: " << char_variable << std::endl;
        std::cout << "Boolean: " << boolean_variable << std::endl;
        `
      },
      {
        "topic": "Operators",
        "details": "Arithmetic operators: +, -, *, /, %. Comparison operators: ==, !=, >, <, >=, <=. Logical operators: &&, ||, !. Assignment operators: =, +=, -=, *=, /=, etc. C++ also includes bitwise operators like &, |, ^, ~, <<, >>.",
        "CodeSnippet":
          `
        // Arithmetic operators
        int a = 10;
        int b = 3;
        std::cout << "Addition: " << a + b << std::endl;
        std::cout << "Subtraction: " << a - b << std::endl;
        std::cout << "Multiplication: " << a * b << std::endl;
        std::cout << "Division: " << a / b << std::endl;
        std::cout << "Modulus: " << a % b << std::endl;

        // Comparison operators
        std::cout << (a == b) << std::endl;  // Equal to
        std::cout << (a != b) << std::endl;  // Not equal to
        std::cout << (a > b) << std::endl;   // Greater than
        std::cout << (a < b) << std::endl;   // Less than
        std::cout << (a >= b) << std::endl;  // Greater than or equal to
        std::cout << (a <= b) << std::endl;  // Less than or equal to

        // Logical operators
        std::cout << ((a > 5) && (b < 5)) << std::endl;  // Logical AND
        std::cout << ((a > 5) || (b < 1)) << std::endl;  // Logical OR
        std::cout << !(a > 5) << std::endl;              // Logical NOT

        // Bitwise operators
        std::cout << (a & b) << std::endl;  // AND
        std::cout << (a | b) << std::endl;  // OR
        std::cout << (a ^ b) << std::endl;  // XOR
        std::cout << (~a) << std::endl;     // NOT
        std::cout << (a << 1) << std::endl; // Left shift
        std::cout << (a >> 1) << std::endl; // Right shift
        `
      },
      {
        "topic": "Control Flow",
        "details": "Conditional statements: if, else if, else, switch. Loops: for loop, while loop, do-while loop. Break and continue: used to exit a loop or skip an iteration.",
        "CodeSnippet":
          `
        // Conditional statements
        int x = 10;
        if (x > 0) {
            std::cout << "Positive" << std::endl;
        } else if (x == 0) {
            std::cout << "Zero" << std::endl;
        } else {
            std::cout << "Negative" << std::endl;
        }

        // Loops
        for (int i = 0; i < 5; i++) {
            std::cout << i << std::endl;  // For loop
        }

        int count = 0;
        while (count < 5) {
            std::cout << count << std::endl;
            count++;  // While loop
        }

        int j = 0;
        do {
            std::cout << j << std::endl;
            j++;
        } while (j < 5);  // Do-while loop

        // Break and continue
        for (int i = 0; i < 10; i++) {
            if (i == 3) {
                continue;  // Skip the rest of the loop at index 3
            }
            if (i == 7) {
                break;  // Exit the loop when i is 7
            }
            std::cout << i << std::endl;
        }
        `
      },
      {
        "topic": "Functions",
        "details": "Functions are defined using a return type, name, and parameters. Functions can return values or be void (returning nothing). C++ supports function overloading, allowing multiple functions with the same name but different parameters.",
        "CodeSnippet":
          `
        // Function definition
        int add(int a, int b) {
            return a + b;
        }

        void greet() {
            std::cout << "Hello, Tanmay!" << std::endl;
        }

        // Function overloading
        int multiply(int a, int b) {
            return a * b;
        }

        double multiply(double a, double b) {
            return a * b;
        }

        int main() {
            std::cout << "Sum: " << add(5, 3) << std::endl;
            greet();
            std::cout << "Multiplication (int): " << multiply(5, 3) << std::endl;
            std::cout << "Multiplication (double): " << multiply(5.5, 3.3) << std::endl;
            return 0;
        }
        `
      },
      {
        "topic": "Arrays and Pointers",
        "details": "Arrays are fixed-size collections of elements of the same type, defined with square brackets []. Pointers store memory addresses of variables. Pointers are declared using the * operator and can be used for dynamic memory allocation.",
        "CodeSnippet":
          `
        // Arrays
        int numbers[5] = {1, 2, 3, 4, 5};
        for (int i = 0; i < 5; i++) {
            std::cout << numbers[i] << std::endl;
        }

        // Pointers
        int value = 10;
        int* ptr = &value;

        std::cout << "Value: " << value << std::endl;
        std::cout << "Pointer Address: " << ptr << std::endl;
        std::cout << "Pointer Value: " << *ptr << std::endl;

        // Dynamic memory allocation
        int* dynamicArray = new int[5];
        for (int i = 0; i < 5; i++) {
            dynamicArray[i] = i + 1;
        }

        for (int i = 0; i < 5; i++) {
            std::cout << dynamicArray[i] << std::endl;
        }

        delete[] dynamicArray;  // Free allocated memory
        `
      },
      {
        "topic": "Strings",
        "details": "C++ strings can be represented as arrays of characters (C-style strings) or using the std::string class. std::string provides more functionality and is easier to work with compared to C-style strings.",
        "CodeSnippet":
          `
        // C-style strings
        char cstr[] = "Hello";
        std::cout << "C-style string: " << cstr << std::endl;

        // std::string
        std::string cppstr = "Hello, World!";
        std::cout << "C++ string: " << cppstr << std::endl;

        // String concatenation
        std::string name = "Tanmay";
        std::string greeting = "Hello, " + name + "!";
        std::cout << greeting << std::endl;

        // String length
        std::cout << "Length of string: " << cppstr.length() << std::endl;
        `
      },
      {
        "topic": "Structures and Unions",
        "details": "Structures (struct) are user-defined data types that group variables of different types. Unions (union) are similar but share the same memory location for all members, meaning only one member can hold a value at a time.",
        "CodeSnippet":
          `
        // Structure
        struct Person {
            std::string name;
            int age;
            float height;
        };

        // Union
        union Data {
            int intVal;
            float floatVal;
            char charVal;
        };

        int main() {
            // Using struct
            Person person1;
            person1.name = "Tanmay";
            person1.age = 20;
            person1.height = 5.9;

            std::cout << "Name: " << person1.name << std::endl;
            std::cout << "Age: " << person1.age << std::endl;
            std::cout << "Height: " << person1.height << std::endl;

            // Using union
            Data data;
            data.intVal = 10;
            std::cout << "Int Value: " << data.intVal << std::endl;
            data.floatVal = 3.14;
            std::cout << "Float Value: " << data.floatVal << std::endl;
            data.charVal = 'A';
            std::cout << "Char Value: " << data.charVal << std::endl;

            return 0;
        }
        `
      },
      {
        "topic": "Classes and Objects",
        "details": "Classes are blueprints for creating objects and are defined using the class keyword. Objects are instances of classes. Classes can have attributes (variables) and methods (functions) and support OOP principles like encapsulation and abstraction.",
        "CodeSnippet":
          `
        // Class definition
        class Dog {
        public:
            std::string name;
            int age;

            void bark() {
                std::cout << "Woof!" << std::endl;
            }
        };

        int main() {
            // Creating an object
            Dog dog1;
            dog1.name = "Buddy";
            dog1.age = 5;

            std::cout << "Dog's name: " << dog1.name << std::endl;
            std::cout << "Dog's age: " << dog1.age << std::endl;
            dog1.bark();

            return 0;
        }
        `
      },
      {
        "topic": "Inheritance",
        "details": "Inheritance allows a class (derived class) to inherit properties and behavior from another class (base class). C++ supports multiple inheritance, allowing a class to inherit from more than one base class.",
        "CodeSnippet":
          `
        // Base class
        class Animal {
        public:
            void eat() {
                std::cout << "This animal is eating." << std::endl;
            }
        };

        // Derived class
        class Dog : public Animal {
        public:
            void bark() {
                std::cout << "Woof!" << std::endl;
            }
        };

        int main() {
            Dog dog1;
            dog1.eat();  // Inherited from Animal
            dog1.bark(); // Defined in Dog

            return 0;
        }
        `
      },
      {
        "topic": "Polymorphism",
        "details": "Polymorphism allows functions to be redefined in derived classes and called through a base class pointer or reference. Achieved through function overloading, operator overloading, and virtual functions.",
        "CodeSnippet":
          `
        // Base class
        class Animal {
        public:
            virtual void sound() {
                std::cout << "This is a generic animal sound." << std::endl;
            }
        };

        // Derived class
        class Dog : public Animal {
        public:
            void sound() override {
                std::cout << "Woof!" << std::endl;
            }
        };

        // Derived class
        class Cat : public Animal {
        public:
            void sound() override {
                std::cout << "Meow!" << std::endl;
            }
        };

        int main() {
            Animal* animal;
            Dog dog;
            Cat cat;

            animal = &dog;
            animal->sound();  // Outputs: Woof!

            animal = &cat;
            animal->sound();  // Outputs: Meow!

            return 0;
        }
        `
      },
      {
        "topic": "Templates",
        "details": "Templates enable generic programming by allowing functions and classes to operate with any data type. Function templates and class templates are defined using the template keyword.",
        "CodeSnippet":
          `
        // Function template
        template <typename T>
        T add(T a, T b) {
            return a + b;
        }

        // Class template
        template <class T>
        class Box {
        private:
            T value;
        public:
            Box(T v) : value(v) {}
            T getValue() {
                return value;
            }
        };

        int main() {
            std::cout << "Sum (int): " << add(5, 3) << std::endl;
            std::cout << "Sum (double): " << add(5.5, 3.3) << std::endl;

            Box<int> intBox(5);
            Box<double> doubleBox(5.5);

            std::cout << "Int Box: " << intBox.getValue() << std::endl;
            std::cout << "Double Box: " << doubleBox.getValue() << std::endl;

            return 0;
        }
        `
      },
      {
        "topic": "STL (Standard Template Library)",
        "details": "STL provides a set of template classes and functions, including containers like vectors, stacks, queues, and maps, as well as algorithms for sorting, searching, and manipulating data structures.",
        "CodeSnippet":
          `
        #include <iostream>
        #include <vector>
        #include <algorithm>

        int main() {
            // Vector
            std::vector<int> numbers = {4, 2, 3, 1, 5};
            std::cout << "Original vector: ";
            for(int n : numbers)
                std::cout << n << " ";
            std::cout << std::endl;

            // Sorting
            std::sort(numbers.begin(), numbers.end());
            std::cout << "Sorted vector: ";
            for(int n : numbers)
                std::cout << n << " ";
            std::cout << std::endl;

            // Finding an element
            auto it = std::find(numbers.begin(), numbers.end(), 3);
            if (it != numbers.end()) {
                std::cout << "Element 3 found at position: " << std::distance(numbers.begin(), it) << std::endl;
            } else {
                std::cout << "Element 3 not found." << std::endl;
            }

            return 0;
        }
        `
      },
      {
        "topic": "Exception Handling",
        "details": "Exceptions in C++ are handled using try, catch, and throw blocks. Exceptions are used to signal errors or unusual conditions. Multiple catch blocks can be used to handle different types of exceptions.",
        "CodeSnippet":
          `
        #include <iostream>
        #include <exception>

        int main() {
            try {
                int a = 10;
                int b = 0;
                if (b == 0) {
                    throw std::runtime_error("Division by zero error");
                }
                std::cout << "Result: " << a / b << std::endl;
            } catch (const std::runtime_error& e) {
                std::cout << "Error: " << e.what() << std::endl;
            }

            return 0;
        }
        `
      },
      {
        "topic": "File Handling",
        "details": "Files can be handled using ifstream (input file stream) and ofstream (output file stream) from the <fstream> library. Common operations include opening, reading, writing, and closing files.",
        "CodeSnippet":
          `
        #include <iostream>
        #include <fstream>
        #include <string>

        int main() {
            // Writing to a file
            std::ofstream outFile("example.txt");
            outFile << "Hello, World!" << std::endl;
            outFile.close();

            // Reading from a file
            std::ifstream inFile("example.txt");
            std::string line;
            if (inFile.is_open()) {
                while (getline(inFile, line)) {
                    std::cout << line << std::endl;
                }
                inFile.close();
            } else {
                std::cout << "Unable to open file" << std::endl;
            }

            return 0;
        }
        `
      },
      {
        "topic": "Preprocessor Directives",
        "details": "Preprocessor directives begin with # and are used for tasks like including libraries (#include), defining constants (#define), and conditional compilation (#ifdef, #endif).",
        "CodeSnippet":
          `
        // Preprocessor directives
        #include <iostream>
        #define PI 3.14159

        int main() {
            std::cout << "Value of PI: " << PI << std::endl;

            #ifdef PI
                std::cout << "PI is defined" << std::endl;
            #else
                std::cout << "PI is not defined" << std::endl;
            #endif

            return 0;
        }
        `
      },
      {
        "topic": "Memory Management",
        "details": "C++ allows manual memory management using new and delete operators for dynamic memory allocation and deallocation. Memory leaks and dangling pointers are common issues to watch out for.",
        "CodeSnippet":
          `
        int main() {
            // Dynamic memory allocation
            int* ptr = new int;
            *ptr = 10;

            std::cout << "Value: " << *ptr << std::endl;

            // Deallocate memory
            delete ptr;
            ptr = nullptr;

            return 0;
        }
        `
      },
      {
        "topic": "Conclusion",
        "details": "C++ is a powerful language for systems programming, game development, and applications requiring high performance. Understanding its fundamentals opens doors to more advanced topics like multithreading, networking, and template metaprogramming.",
        "CodeSnippet":
          `
        // C++ conclusion statement
        std::cout << "C++ is versatile and powerful, used in various high-performance applications." << std::endl;
        `
      }
    ],


    Swift : [
      {
          "topic": "Introduction",
          "details": "Swift is a powerful and intuitive programming language developed by Apple, first released in 2014. It's designed for building apps for iOS, macOS, watchOS, and tvOS. Swift is modern, safe, and fast, with a focus on performance and safety.",
          "CodeSnippet": 
          `
          // A simple Swift program
          import Foundation
  
          print("Hello, World!")
          `
      },
      {
          "topic": "Variables and Constants",
          "details": "Variables are declared using the var keyword, and their values can change. Constants are declared using the let keyword and cannot be changed once set. Swift uses type inference, but types can be explicitly defined.",
          "CodeSnippet": 
          `
          // Variables
          var greeting = "Hello, World!"
          greeting = "Hello, Swift!"
  
          // Constants
          let pi = 3.14159
          // pi = 3.14 // This will cause an error because 'pi' is a constant
  
          // Type annotation
          var message: String = "Welcome to Swift!"
          let version: Double = 5.0
  
          print(greeting)
          print("Pi: \(pi)")
          print(message)
          print("Swift Version: \(version)")
          `
      },
      {
          "topic": "Data Types",
          "details": "Common data types include Int, Float, Double, String, and Bool. Swift also provides advanced types like Array, Dictionary, and Set. Optionals, denoted by ?, allow for the possibility of nil values, ensuring safer code.",
          "CodeSnippet": 
          `
          // Basic data types
          let age: Int = 20
          let height: Float = 5.9
          let price: Double = 199.99
          let name: String = "Tanmay"
          let isStudent: Bool = true
  
          // Array
          var fruits: [String] = ["Apple", "Banana", "Cherry"]
  
          // Dictionary
          var person: [String: Any] = ["Name": "Tanmay", "Age": 20, "Height": 5.9]
  
          // Set
          var uniqueNumbers: Set<Int> = [1, 2, 3, 4, 5]
  
          // Optionals
          var optionalString: String? = "Optional Value"
          var optionalNumber: Int? = nil
  
          print(name)
          print("Age: \(age), Height: \(height), Price: \(price)")
          print("Is Student: \(isStudent)")
          print("Fruits: \(fruits)")
          print("Person: \(person)")
          print("Unique Numbers: \(uniqueNumbers)")
          print("Optional String: \(optionalString ?? "No Value")")
          `
      },
      {
          "topic": "Operators",
          "details": "Arithmetic operators: +, -, *, /, %. Comparison operators: ==, !=, >, <, >=, <=. Logical operators: &&, ||, !. Swift also includes range operators like ..< (half-open range) and ... (closed range).",
          "CodeSnippet": 
          `
          // Arithmetic operators
          let a = 10
          let b = 3
          print("Addition: \(a + b)")
          print("Subtraction: \(a - b)")
          print("Multiplication: \(a * b)")
          print("Division: \(a / b)")
          print("Modulus: \(a % b)")
  
          // Comparison operators
          print(a == b)  // Equal to
          print(a != b)  // Not equal to
          print(a > b)   // Greater than
          print(a < b)   // Less than
          print(a >= b)  // Greater than or equal to
          print(a <= b)  // Less than or equal to
  
          // Logical operators
          print((a > 5) && (b < 5))  // Logical AND
          print((a > 5) || (b < 1))  // Logical OR
          print(!(a > 5))            // Logical NOT
  
          // Range operators
          let range1 = 1..<5  // Half-open range: 1, 2, 3, 4
          let range2 = 1...5  // Closed range: 1, 2, 3, 4, 5
  
          for i in range1 {
              print("Half-open range element: \(i)")
          }
          for i in range2 {
              print("Closed range element: \(i)")
          }
          `
      },
      {
          "topic": "Control Flow",
          "details": "Swift uses if, else if, else for conditional branching. Loops include for-in, while, and repeat-while. The switch statement in Swift is powerful, supporting pattern matching and range matching.",
          "CodeSnippet": 
          `
          // If-else statement
          let score = 85
          if score >= 90 {
              print("Grade: A")
          } else if score >= 75 {
              print("Grade: B")
          } else {
              print("Grade: C")
          }
  
          // For-in loop
          for i in 1...5 {
              print("For-in loop iteration: \(i)")
          }
  
          // While loop
          var count = 5
          while count > 0 {
              print("While loop countdown: \(count)")
              count -= 1
          }
  
          // Repeat-while loop
          repeat {
              print("Repeat-while loop countdown: \(count)")
              count += 1
          } while count < 5
  
          // Switch statement
          let grade = "A"
          switch grade {
          case "A":
              print("Excellent!")
          case "B":
              print("Good job!")
          case "C":
              print("You passed.")
          default:
              print("Better luck next time.")
          }
          `
      },
      {
          "topic": "Functions",
          "details": "Functions are defined using the func keyword, followed by a name, parameters, and a return type. Swift supports function overloading, default parameters, and variadic parameters. Functions can also be nested and returned as values.",
          "CodeSnippet": 
          `
          // Function definition
          func greet(name: String) -> String {
              return "Hello, \(name)!"
          }
  
          // Function with default parameters
          func add(a: Int, b: Int = 5) -> Int {
              return a + b
          }
  
          // Variadic function
          func sum(numbers: Int...) -> Int {
              return numbers.reduce(0, +)
          }
  
          // Nested function
          func calculate(op: String) -> (Int, Int) -> Int {
              func add(a: Int, b: Int) -> Int { return a + b }
              func subtract(a: Int, b: Int) -> Int { return a - b }
  
              return op == "+" ? add : subtract
          }
  
          print(greet(name: "Tanmay"))
          print("Add with default parameter: \(add(a: 10))")
          print("Sum of numbers: \(sum(numbers: 1, 2, 3, 4, 5))")
  
          let operation = calculate(op: "+")
          print("Operation result: \(operation(10, 5))")
          `
      },
      {
          "topic": "Closures",
          "details": "Closures are self-contained blocks of functionality that can be passed around and used in your code. They are similar to lambdas in other languages and can capture values from their surrounding context.",
          "CodeSnippet": 
          `
          // Basic closure
          let greetingClosure = { (name: String) -> String in
              return "Hello, \(name)!"
          }
          print(greetingClosure("Tanmay"))
  
          // Closure capturing values
          func makeIncrementer(incrementAmount: Int) -> () -> Int {
              var total = 0
              let incrementer: () -> Int = {
                  total += incrementAmount
                  return total
              }
              return incrementer
          }
  
          let incrementByTen = makeIncrementer(incrementAmount: 10)
          print(incrementByTen())  // 10
          print(incrementByTen())  // 20
          `
      },
      {
          "topic": "Collections",
          "details": "Swift offers three primary collection types: Array, Set, and Dictionary. Arrays are ordered, Sets are unordered with unique elements, and Dictionaries are unordered collections of key-value pairs.",
          "CodeSnippet": 
          `
          // Array
          var fruits: [String] = ["Apple", "Banana", "Cherry"]
          fruits.append("Orange")
          print("Fruits array: \(fruits)")
  
          // Set
          var uniqueNumbers: Set<Int> = [1, 2, 3, 4, 5]
          uniqueNumbers.insert(6)
          uniqueNumbers.insert(3)  // Duplicate element, won't be added
          print("Unique numbers set: \(uniqueNumbers)")
  
          // Dictionary
          var capitals: [String: String] = ["India": "New Delhi", "USA": "Washington, D.C."]
          capitals["France"] = "Paris"
          print("Capitals dictionary: \(capitals)")
          `
      },
      {
          "topic": "Optionals",
          "details": "Optionals represent variables that can either have a value or be nil. Unwrapping optionals can be done safely using if let, guard let, or implicitly using the ! operator, though the latter should be used with caution.",
          "CodeSnippet": 
          `
          // Optional variable
          var optionalName: String? = "Tanmay"
          print("Optional value: \(optionalName ?? "No name")")
  
          // Optional unwrapping using if let
          if let name = optionalName {
              print("Unwrapped name: \(name)")
          } else {
              print("No name provided")
          }
  
          // Optional unwrapping using guard let
          func greet(optionalName: String?) {
              guard let name = optionalName else {
                  print("No name provided")
                  return
              }
              print("Hello, \(name)!")
          }
          greet(optionalName: optionalName)
  
          // Force unwrapping (use with caution)
          print("Forced unwrapped name: \(optionalName!)")
          `
      },
      {
          "topic": "Enumerations",
          "details": "Enums define a common type for a group of related values, making your code more type-safe and readable. Swift enums can also have associated values and can conform to protocols.",
          "CodeSnippet": 
          `
          // Basic enumeration
          enum CompassPoint {
              case north, south, east, west
          }
  
          // Using an enum
          var direction = CompassPoint.north
          direction = .west
          print("Direction: \(direction)")
  
          // Enum with associated values
          enum Barcode {
              case upc(Int, Int, Int, Int)
              case qrCode(String)
          }
  
          var productBarcode = Barcode.upc(8, 85909, 51226, 3)
          productBarcode = .qrCode("ABCDEFGHIJKLMNOP")
  
          switch productBarcode {
          case .upc(let numberSystem, let manufacturer, let product, let check):
              print("UPC: \(numberSystem), \(manufacturer), \(product), \(check)")
          case .qrCode(let code):
              print("QR Code: \(code)")
          }
          `
      },
      {
          "topic": "Structures and Classes",
          "details": "Structures (struct) and classes (class) are both used to define complex data types. The key difference is that structures are value types (copied when passed) and classes are reference types (shared references).",
          "CodeSnippet": 
          `
          // Structure definition
          struct Resolution {
              var width = 0
              var height = 0
          }
  
          // Class definition
          class VideoMode {
              var resolution = Resolution()
              var interlaced = false
              var frameRate = 0.0
              var name: String?
          }
  
          // Using struct (value type)
          let hd = Resolution(width: 1920, height: 1080)
          var cinema = hd
          cinema.width = 2048
          print("HD resolution: \(hd.width)x\(hd.height)")
          print("Cinema resolution: \(cinema.width)x\(cinema.height)")
  
          // Using class (reference type)
          let tenEighty = VideoMode()
          tenEighty.resolution = hd
          tenEighty.interlaced = true
          tenEighty.name = "1080i"
          tenEighty.frameRate = 25.0
          let alsoTenEighty = tenEighty
          alsoTenEighty.frameRate = 30.0
          print("Frame rate: \(tenEighty.frameRate)")
          `
      },
      {
          "topic": "Inheritance",
          "details": "Swift supports single inheritance, where a class can inherit from another class. Inheritance allows a class to inherit methods, properties, and other characteristics from another class.",
          "CodeSnippet": 
          `
          // Base class
          class Animal {
              var name: String
  
              init(name: String) {
                  self.name = name
              }
  
              func makeSound() {
                  print("Animal sound")
              }
          }
  
          // Subclass
          class Dog: Animal {
              func bark() {
                  print("Woof!")
              }
  
              override func makeSound() {
                  bark()
              }
          }
  
          let dog = Dog(name: "Buddy")
          dog.makeSound()  // Outputs: Woof!
          `
      },
      {
          "topic": "Protocols and Delegates",
          "details": "Protocols define a blueprint of methods, properties, and other requirements that suit a particular task or piece of functionality. Delegation is a design pattern where one object acts on behalf of another, typically implemented using protocols.",
          "CodeSnippet": 
          `
          // Protocol definition
          protocol Greetable {
              var name: String { get }
              func greet() -> String
          }
  
          // Class conforming to protocol
          class Person: Greetable {
              var name: String
  
              init(name: String) {
                  self.name = name
              }
  
              func greet() -> String {
                  return "Hello, \(name)!"
              }
          }
  
          let person = Person(name: "Tanmay")
          print(person.greet())
  
          // Delegation example
          protocol TaskDelegate {
              func taskCompleted()
          }
  
          class Worker {
              var delegate: TaskDelegate?
  
              func startTask() {
                  // Task is done
                  delegate?.taskCompleted()
              }
          }
  
          class Manager: TaskDelegate {
              func taskCompleted() {
                  print("Task has been completed!")
              }
          }
  
          let manager = Manager()
          let worker = Worker()
          worker.delegate = manager
          worker.startTask()
          `
      },
      {
          "topic": "Error Handling",
          "details": "Errors in Swift are represented by values of types that conform to the Error protocol. Error handling is done using do, try, catch blocks. Swift also supports throwing functions and rethrows functions.",
          "CodeSnippet": 
          `
          // Error handling in Swift
  
          enum DivisionError: Error {
              case divisionByZero
          }
  
          func divide(_ a: Int, by b: Int) throws -> Int {
              if b == 0 {
                  throw DivisionError.divisionByZero
              }
              return a / b
          }
  
          do {
              let result = try divide(10, by: 0)
              print("Result: \(result)")
          } catch DivisionError.divisionByZero {
              print("Error: Division by zero is not allowed.")
          } catch {
              print("An unexpected error occurred: \(error).")
          }
          `
      },
      {
          "topic": "Extensions",
          "details": "Extensions in Swift add new functionality to existing classes, structures, enums, or protocols without modifying the original source code. Extensions are a key feature for adding methods, computed properties, and conforming to protocols.",
          "CodeSnippet": 
          `
          // Extension example
          extension Int {
              func squared() -> Int {
                  return self * self
              }
          }
  
          let number = 4
          print("Squared: \(number.squared())")
  
          // Extending a protocol
          protocol Describable {
              func describe() -> String
          }
  
          extension String: Describable {
              func describe() -> String {
                  return "Description: \(self)"
              }
          }
  
          let text = "Hello, Swift!"
          print(text.describe())
          `
      },
      {
          "topic": "Memory Management",
          "details": "Swift uses Automatic Reference Counting (ARC) to manage memory, which tracks and manages your app’s memory usage. Understanding strong, weak, and unowned references is crucial to avoid memory leaks and retain cycles.",
          "CodeSnippet": 
          `
          // Memory management using ARC
          class Person {
              var name: String
              weak var friend: Person?
  
              init(name: String) {
                  self.name = name
                  print("\(name) is being initialized")
              }
  
              deinit {
                  print("\(name) is being deinitialized")
              }
          }
  
          var person1: Person?
          var person2: Person?
  
          person1 = Person(name: "Tanmay")
          person2 = Person(name: "John")
  
          person1?.friend = person2
          person2?.friend = person1
  
          person1 = nil
          person2 = nil
          `
      },
      {
          "topic": "Generics",
          "details": "Generics allow you to write flexible, reusable functions and types that can work with any type. Swift's powerful generics feature lets you avoid duplication and express the intent of your code more clearly.",
          "CodeSnippet": 
          `
          // Generic function
          func swapValues<T>(_ a: inout T, _ b: inout T) {
              let temp = a
              a = b
              b = temp
          }
  
          var x = 5
          var y = 10
          swapValues(&x, &y)
          print("Swapped values: x = \(x), y = \(y)")
  
          var a = "Hello"
          var b = "World"
          swapValues(&a, &b)
          print("Swapped values: a = \(a), b = \(b)")
  
          // Generic class
          class Box<T> {
              var value: T
  
              init(value: T) {
                  self.value = value
              }
  
              func describe() -> String {
                  return "Box contains: \(value)"
              }
          }
  
          let intBox = Box(value: 123)
          print(intBox.describe())
  
          let stringBox = Box(value: "Hello, Swift!")
          print(stringBox.describe())
          `
      },
      {
          "topic": "Conclusion",
          "details": "Swift is a versatile language designed to work seamlessly with Apple's ecosystem. Its modern syntax, strong type safety, and powerful features like closures, protocols, and generics make it a top choice for iOS and macOS development.",
          "CodeSnippet": 
          `
          // Swift conclusion statement
          print("Swift is a modern and powerful language, perfect for iOS and macOS development.")
          `
      }
  ],

  JavaScript: [
    {
        "topic": "Introduction",
        "details": "JavaScript is a versatile, high-level programming language primarily used for web development. It is an essential part of web technologies alongside HTML and CSS, enabling dynamic content on web pages.",
        "CodeSnippet": 
        `
        // A simple JavaScript program
        console.log("Hello, World!");
        `
    },
    {
        "topic": "Variables and Data Types",
        "details": "Variables in JavaScript are declared using var, let, or const. Data types include number, string, boolean, object, undefined, and null. JavaScript is dynamically typed, meaning variable types are determined at runtime.",
        "CodeSnippet": 
        `
        // Variable declarations
        var x = 10;        // var (function-scoped)
        let y = 20;        // let (block-scoped)
        const z = 30;      // const (block-scoped and constant)

        // Data types
        let name = "Tanmay";  // String
        let age = 20;         // Number
        let isStudent = true; // Boolean
        let person = { name: "Tanmay", age: 20 }; // Object
        let colors = ["red", "green", "blue"];   // Array (which is an object)
        let undef;            // undefined
        let empty = null;     // null

        console.log(name, age, isStudent, person, colors, undef, empty);
        `
    },
    {
        "topic": "Operators",
        "details": "Arithmetic operators: +, -, *, /, %. Comparison operators: ==, ===, !=, !==, >, <, >=, <=. Logical operators: &&, ||, !. JavaScript also includes bitwise operators and the ternary operator (condition ? trueExpression : falseExpression).",
        "CodeSnippet": 
        `
        // Arithmetic operators
        let a = 10;
        let b = 3;
        console.log("Addition:", a + b);
        console.log("Subtraction:", a - b);
        console.log("Multiplication:", a * b);
        console.log("Division:", a / b);
        console.log("Modulus:", a % b);

        // Comparison operators
        console.log(a == b);  // Loose equality
        console.log(a === b); // Strict equality
        console.log(a != b);  // Loose inequality
        console.log(a !== b); // Strict inequality
        console.log(a > b);   // Greater than
        console.log(a < b);   // Less than

        // Logical operators
        console.log(a > 5 && b < 5);  // Logical AND
        console.log(a > 5 || b < 1);  // Logical OR
        console.log(!(a > 5));        // Logical NOT

        // Ternary operator
        let max = a > b ? a : b;
        console.log("Maximum:", max);
        `
    },
    {
        "topic": "Control Flow",
        "details": "JavaScript uses if, else if, else for conditional branching. Loops include for, while, and do-while. The switch statement is used for multiple conditional cases. Break and continue are used to control loop execution.",
        "CodeSnippet": 
        `
        // If-else statement
        let score = 85;
        if (score >= 90) {
            console.log("Grade: A");
        } else if (score >= 75) {
            console.log("Grade: B");
        } else {
            console.log("Grade: C");
        }

        // For loop
        for (let i = 0; i < 5; i++) {
            console.log("For loop iteration:", i);
        }

        // While loop
        let count = 5;
        while (count > 0) {
            console.log("While loop countdown:", count);
            count--;
        }

        // Do-while loop
        let j = 0;
        do {
            console.log("Do-while loop iteration:", j);
            j++;
        } while (j < 5);

        // Switch statement
        let grade = "A";
        switch (grade) {
            case "A":
                console.log("Excellent!");
                break;
            case "B":
                console.log("Good job!");
                break;
            case "C":
                console.log("You passed.");
                break;
            default:
                console.log("Better luck next time.");
        }
        `
    },
    {
        "topic": "Functions",
        "details": "Functions in JavaScript can be defined using the function keyword or as arrow functions (ES6). Functions can be assigned to variables, passed as arguments, and returned from other functions. JavaScript supports first-class functions.",
        "CodeSnippet": 
        `
        // Function declaration
        function greet(name) {
            return "Hello, " + name + "!";
        }

        // Function expression
        let greetExpression = function(name) {
            return "Hi, " + name + "!";
        };

        // Arrow function (ES6)
        let greetArrow = (name) => "Hey, " + name + "!";

        console.log(greet("Tanmay"));
        console.log(greetExpression("Tanmay"));
        console.log(greetArrow("Tanmay"));

        // Function as an argument
        function sayHello(callback) {
            console.log(callback("Tanmay"));
        }

        sayHello(greetArrow);

        // Function returning another function
        function makeMultiplier(multiplier) {
            return function(x) {
                return x * multiplier;
            };
        }

        let double = makeMultiplier(2);
        console.log(double(5));  // Outputs: 10
        `
    },
    {
        "topic": "Objects",
        "details": "Objects in JavaScript are collections of key-value pairs. Keys are strings (or Symbols in ES6), and values can be any data type, including functions. Objects are central to JavaScript’s structure, enabling object-oriented programming.",
        "CodeSnippet": 
        `
        // Object creation
        let person = {
            name: "Tanmay",
            age: 20,
            greet: function() {
                return "Hello, my name is " + this.name;
            }
        };

        console.log(person.name);
        console.log(person.age);
        console.log(person.greet());

        // Adding properties and methods
        person.city = "East Lansing";
        person.sayCity = function() {
            return "I live in " + this.city;
        };

        console.log(person.city);
        console.log(person.sayCity());
        `
    },
    {
        "topic": "Arrays",
        "details": "Arrays are ordered collections of elements, defined using square brackets []. JavaScript arrays are flexible, allowing mixed data types and dynamic resizing. Common methods include push(), pop(), shift(), unshift(), and map().",
        "CodeSnippet": 
        `
        // Array creation
        let fruits = ["Apple", "Banana", "Cherry"];
        console.log(fruits);

        // Array methods
        fruits.push("Orange");    // Add to the end
        console.log(fruits);

        fruits.pop();             // Remove from the end
        console.log(fruits);

        fruits.shift();           // Remove from the beginning
        console.log(fruits);

        fruits.unshift("Mango");  // Add to the beginning
        console.log(fruits);

        // Array iteration
        fruits.forEach(function(fruit, index) {
            console.log(index, fruit);
        });

        // Array map
        let upperFruits = fruits.map(function(fruit) {
            return fruit.toUpperCase();
        });
        console.log(upperFruits);
        `
    },
    {
        "topic": "Prototypes and Inheritance",
        "details": "JavaScript uses prototypal inheritance, where objects can inherit properties and methods from other objects. Every object has a prototype, and you can extend objects by adding properties or methods to their prototype.",
        "CodeSnippet": 
        `
        // Constructor function
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        // Adding a method to the prototype
        Person.prototype.greet = function() {
            return "Hello, my name is " + this.name;
        };

        // Creating an object
        let person1 = new Person("Tanmay", 20);
        console.log(person1.greet());

        // Inheritance through prototypes
        function Student(name, age, grade) {
            Person.call(this, name, age);
            this.grade = grade;
        }

        Student.prototype = Object.create(Person.prototype);
        Student.prototype.constructor = Student;

        Student.prototype.study = function() {
            return this.name + " is studying.";
        };

        let student1 = new Student("John", 21, "A");
        console.log(student1.greet());
        console.log(student1.study());
        `
    },
    {
        "topic": "Asynchronous Programming",
        "details": "JavaScript handles asynchronous operations using callbacks, Promises, and async/await syntax. These features are crucial for tasks like fetching data from a server or performing time-consuming operations without blocking the main thread.",
        "CodeSnippet": 
        `
        // Callback example
        function fetchData(callback) {
            setTimeout(function() {
                callback("Data fetched");
            }, 2000);
        }

        fetchData(function(result) {
            console.log(result);
        });

        // Promise example
        function fetchDataPromise() {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    resolve("Data fetched");
                }, 2000);
            });
        }

        fetchDataPromise().then(function(result) {
            console.log(result);
        });

        // Async/await example
        async function fetchDataAsync() {
            let result = await fetchDataPromise();
            console.log(result);
        }

        fetchDataAsync();
        `
    },
    {
        "topic": "DOM Manipulation",
        "details": "The Document Object Model (DOM) is a representation of a webpage's structure. JavaScript can interact with and manipulate the DOM to change the content, structure, and style of a webpage dynamically.",
        "CodeSnippet": 
        `
        // DOM selection
        let title = document.getElementById("title");
        console.log(title.textContent);

        // DOM manipulation
        title.textContent = "New Title";

        // Creating a new element
        let newParagraph = document.createElement("p");
        newParagraph.textContent = "This is a new paragraph.";
        document.body.appendChild(newParagraph);

        // Changing styles
        title.style.color = "blue";
        title.style.fontSize = "24px";
        `
    },
    {
        "topic": "Events",
        "details": "Events are actions or occurrences that happen in the browser, such as clicks, form submissions, or page loads. JavaScript can listen for and respond to events using event listeners, enabling interactive web experiences.",
        "CodeSnippet": 
        `
        // Event listener
        document.getElementById("myButton").addEventListener("click", function() {
            alert("Button clicked!");
        });

        // Mouseover event
        document.getElementById("myButton").addEventListener("mouseover", function() {
            this.style.backgroundColor = "lightblue";
        });

        // Form submission
        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            console.log("Form submitted");
        });
        `
    },
    {
        "topic": "Error Handling",
        "details": "Errors in JavaScript are handled using try, catch, finally blocks. Custom errors can be thrown using the throw keyword. JavaScript also provides the Error object for creating and handling errors.",
        "CodeSnippet": 
        `
        // Try-catch-finally
        try {
            let result = 10 / 0;
            if (!isFinite(result)) {
                throw new Error("Division by zero");
            }
            console.log(result);
        } catch (error) {
            console.log("Error:", error.message);
        } finally {
            console.log("This runs regardless of success or error.");
        }

        // Custom error
        function checkAge(age) {
            if (age < 18) {
                throw new Error("Age must be 18 or older.");
            }
            return "Access granted";
        }

        try {
            console.log(checkAge(16));
        } catch (error) {
            console.log("Error:", error.message);
        }
        `
    },
    {
        "topic": "ES6+ Features",
        "details": "Modern JavaScript (ES6 and beyond) introduces features like let and const for block-scoped variables, arrow functions, template literals, destructuring, classes, modules, and enhanced object literals.",
        "CodeSnippet": 
        `
        // let and const
        let x = 10;
        const y = 20;

        // Arrow function
        let add = (a, b) => a + b;
        console.log(add(5, 10));

        // Template literals
        let name = "Tanmay";
        console.log(\`Hello, \${name}!\`);

        // Destructuring
        let person = { name: "Tanmay", age: 20 };
        let { name: personName, age } = person;
        console.log(personName, age);

        // Classes
        class Animal {
            constructor(name) {
                this.name = name;
            }

            speak() {
                console.log(\`\${this.name} makes a sound\`);
            }
        }

        class Dog extends Animal {
            speak() {
                console.log(\`\${this.name} barks\`);
            }
        }

        let dog = new Dog("Buddy");
        dog.speak();
        `
    },
    {
        "topic": "Modules",
        "details": "Modules in JavaScript allow code to be organized into separate files and reused across different parts of an application. The import and export keywords are used to include and expose functionality across modules.",
        "CodeSnippet": 
        `
        // Module file: math.js
        export function add(a, b) {
            return a + b;
        }

        export function multiply(a, b) {
            return a * b;
        }

        // Main file: app.js
        import { add, multiply } from './math.js';

        console.log("Addition:", add(2, 3));
        console.log("Multiplication:", multiply(2, 3));
        `
    },
    {
        "topic": "Conclusion",
        "details": "JavaScript is a cornerstone of web development, enabling interactive and dynamic content on websites. Its versatility extends beyond the browser with environments like Node.js, making it a full-stack language.",
        "CodeSnippet": 
        `
        // JavaScript conclusion statement
        console.log("JavaScript is essential for modern web development, enabling dynamic and interactive user experiences.");
        `
    }
],

    Welcome: [
      {
        "topic": "Introduction",
        "details": "Learning a programming language involves understanding its syntax, core concepts, and practical applications. The process requires consistent practice, problem-solving, and gradually tackling more complex projects."
      },
      {
        "topic": "Choosing the Right Language",
        "details": "Start by selecting a language that aligns with your goals. For web development, consider JavaScript or Python. For mobile apps, Swift or Kotlin may be suitable. Ensure the language has strong community support and ample learning resources."
      },
      {
        "topic": "Understanding the Basics",
        "details": "Begin with fundamental concepts like variables, data types, operators, and control flow (if-else statements, loops). Familiarize yourself with the syntax and basic structure of the language."
      },
      {
        "topic": "Practice with Simple Programs",
        "details": "Start coding simple programs, such as calculators, number guessing games, or basic data manipulation tasks. These exercises help reinforce the basic concepts and build confidence in using the language."
      },
      {
        "topic": "Mastering Core Concepts",
        "details": "Delve deeper into key topics like functions, arrays, and objects. Understand how these elements work together to build more complex programs. Experiment with different ways to solve problems using these constructs."
      },
      {
        "topic": "Working on Small Projects",
        "details": "Apply your knowledge by building small projects like a to-do list app, a simple game, or a basic website. Projects help you connect various programming concepts and see how they work together in a real-world context."
      },
      {
        "topic": "Learning About Libraries and Frameworks",
        "details": "Explore popular libraries and frameworks that enhance the language’s capabilities. For example, learn about React for JavaScript or Flask for Python. Understanding how to use these tools can significantly boost your productivity."
      },
      {
        "topic": "Debugging and Error Handling",
        "details": "Learn to debug your code effectively by understanding common errors and using debugging tools. Practice writing error-free code and handling exceptions to make your programs more robust."
      },
      {
        "topic": "Collaborating and Contributing",
        "details": "Join coding communities, participate in forums, and contribute to open-source projects. Collaboration not only enhances your learning but also helps you build a network of like-minded developers."
      },
      {
        "topic": "Advanced Topics and Optimization",
        "details": "As you become more comfortable with the language, explore advanced topics like performance optimization, algorithms, and data structures. This knowledge will help you write more efficient and scalable code."
      },
      {
        "topic": "Building a Portfolio",
        "details": "Create a portfolio of your projects to showcase your skills. Include a variety of projects that demonstrate your understanding of different concepts and your ability to solve real-world problems."
      },
      {
        "topic": "Continuous Learning",
        "details": "Programming is a continuously evolving field. Stay updated with the latest trends, tools, and best practices by following blogs, taking courses, and experimenting with new technologies."
      },
      {
        "topic": "Conclusion",
        "details": "Learning a programming language is a journey that involves consistent practice, exploration, and adaptation. With dedication and the right approach, you'll be able to master any programming language and apply it to build innovative solutions."
      }
    ],
    
  };
  
  const [selectedOption, setSelectedOption] = useState('Welcome');
  const [info, setInfo] = useState(infoData && infoData["Welcome"] ? infoData["Welcome"] : "Default value");
  const options = [
    'Welcome',
    'Python',
    'Cpp',
    'Swift',
    'JavaScript',
  ];

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    setSelectedOption(selected);
    setInfo(infoData[selected])
  };



  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className='text-xl font-bold text-indigo-700'>CodeMore</h1>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        <div className=" absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[128rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(128rem_128rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="m-5">
            <label htmlFor="assignedTo" className="block text-gray-700 text-lg font-medium mb-2">
              Choose Language
            </label>
            <select
              id="assignedTo"
              value={selectedOption}
              onChange={handleSelectChange}
              className="h-12 w-64 p-4.5 text-lg text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
              {options.map((option) => (
                <option key={option} value={option} className="p-2 text-lg">
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:items-start">
  <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl  lg:gap-x-8 lg:px-8">
    <div className="lg:pr-4">
      <div className="">
        <p className="text-base font-semibold leading-7 text-indigo-600">Beginner</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {selectedOption === 'Cpp' ? 'C++' : selectedOption}
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
          {/* Add some introductory content here if needed */}
        </p>
        <div>
          {info && info.length > 0 && selectedOption !== 'Welcome' ? (
            info.map((section, index) => (

              <div key = {index} className=' lg:grid lg:grid-cols-8 lg:gap-8 lg:items-start'>
              <div key={index} className=" lg:col-span-4 items-start">
                <h2 className=" py-5 text-2xl font-bold tracking-tight text-gray-900 items-start">
                  {section.topic}
                </h2>
                <p className=" py-5 text-lg leading-7 text-gray-700">
                  {section.details}
                </p>
                </div>
                <div className='py-5 lg:col-span-4'>
                <CodeSnippet code={section.CodeSnippet} language={selectedOption.toLowerCase()} />
              </div>
              </div>
            ))
          ) : (
            // <p className="text-lg text-gray-500">Please select a language to see the details.</p>
            info.map((section, index) => (
            <div key = {index} className='p-5 lg:grid lg:grid-cols-8 lg:gap-4 lg:items-start'>
              <div key={index} className=" lg:col-span-8 items-start">
                <h2 className="p-3 text-2xl font-bold tracking-tight text-gray-900 items-start">
                  {section.topic}
                </h2>
                <p className="p-3 text-lg leading-7 text-gray-700">
                  {section.details}
                </p>
                </div>
                <div className='lg:col-span-4'>
                
              </div>
              </div>
          )))}
        </div>
      </div>
    </div>
    {/* code Snippet */}
    {/* <div className="mt-16 lg:mt-0">
      {info && info.length > 0 ? (
        info.map((section, index) => (
          <div key={index} className="mt-16">
            <CodeSnippet code={section.CodeSnippet} language={'python'} />
          </div>
        ))
      ) : (
        <p className="text-lg text-gray-500">Please select a language to see the code snippet.</p>
      )}
    </div> */}
  </div>
</div>

      </div>

    </>
  )
}