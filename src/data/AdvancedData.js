const AdvancedData = {
    Python: [
      {
        "topic": "Advanced Data Structures",
        "details": "Python offers several advanced data structures such as sets, dictionaries, and lists with specialized methods like deque from the collections module for fast appends and pops.",
        "CodeSnippet": 
          `
          from collections import deque
  
          # Deque for fast appends and pops
          d = deque()
          d.append(1)
          d.append(2)
          d.appendleft(0)
          print(d)
          d.pop()
          print(d)
          `
      },
      {
        "topic": "Generators and Iterators",
        "details": "Generators allow you to iterate over data lazily, producing items only when needed. Iterators provide a way to traverse through all the elements of a collection.",
        "CodeSnippet": 
          `
          # Generator example
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
        "topic": "Decorators",
        "details": "Decorators are a powerful tool in Python for modifying the behavior of a function or method. They are used extensively in frameworks like Flask and Django for adding features to routes or views.",
        "CodeSnippet": 
          `
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
        "topic": "Context Managers",
        "details": "Context managers allow you to properly manage resources like files or database connections. The with statement simplifies exception handling by encapsulating common preparation and cleanup tasks.",
        "CodeSnippet": 
          `
          # Context manager example
          with open('file.txt', 'w') as file:
              file.write('Hello, World!')
  
          # Custom context manager
          class MyContextManager:
              def __enter__(self):
                  print('Enter context')
                  return self
              
              def __exit__(self, exc_type, exc_val, exc_tb):
                  print('Exit context')
  
          with MyContextManager() as manager:
              print('Inside context')
          `
      },
      {
        "topic": "Concurrency and Parallelism",
        "details": "Python's threading and multiprocessing modules allow for concurrent execution of tasks. AsyncIO is also used for managing asynchronous IO-bound operations.",
        "CodeSnippet": 
          `
          import threading
  
          def print_numbers():
              for i in range(1, 6):
                  print(i)
  
          # Create a thread
          t = threading.Thread(target=print_numbers)
          t.start()
          t.join()
  
          # AsyncIO example
          import asyncio
  
          async def say_hello():
              await asyncio.sleep(1)
              print('Hello, AsyncIO!')
  
          asyncio.run(say_hello())
          `
      },
      {
        "topic": "Meta-Programming",
        "details": "Meta-programming refers to writing code that manipulates code. In Python, this can be done using metaclasses, decorators, and dynamic function creation.",
        "CodeSnippet": 
          `
          # Metaclass example
          class Meta(type):
              def __new__(cls, name, bases, dct):
                  print(f"Creating class {name}")
                  return super().__new__(cls, name, bases, dct)
  
          class MyClass(metaclass=Meta):
              pass
  
          # Dynamic function creation
          def make_function(n):
              def inner_function():
                  return n
              return inner_function
  
          new_function = make_function(5)
          print(new_function())
          `
      }
    ],

    Cpp: [
    {
      "topic": "Smart Pointers",
      "details": "Smart pointers are a feature of C++ that provide automatic memory management by wrapping raw pointers. Types include std::unique_ptr, std::shared_ptr, and std::weak_ptr.",
      "CodeSnippet": 
        `
        #include <memory>
        #include <iostream>

        int main() {
            std::unique_ptr<int> p1 = std::make_unique<int>(10);
            std::cout << "p1: " << *p1 << std::endl;

            std::shared_ptr<int> p2 = std::make_shared<int>(20);
            std::shared_ptr<int> p3 = p2;
            std::cout << "p2: " << *p2 << " p3: " << *p3 << std::endl;

            return 0;
        }
        `
    },
    {
      "topic": "Lambda Expressions",
      "details": "Lambda expressions allow you to define anonymous functions in a concise way. They are useful for short, throwaway functions and are commonly used with STL algorithms.",
      "CodeSnippet": 
        `
        #include <algorithm>
        #include <vector>
        #include <iostream>

        int main() {
            std::vector<int> numbers = {1, 2, 3, 4, 5};

            // Lambda to find sum of elements
            int sum = 0;
            std::for_each(numbers.begin(), numbers.end(), [&sum](int n) {
                sum += n;
            });

            std::cout << "Sum: " << sum << std::endl;

            return 0;
        }
        `
    },
    {
      "topic": "Multithreading",
      "details": "C++ provides robust support for multithreading through the std::thread class and related synchronization primitives like mutexes, condition variables, and futures.",
      "CodeSnippet": 
        `
        #include <iostream>
        #include <thread>

        void print_numbers() {
            for (int i = 1; i <= 5; i++) {
                std::cout << i << std::endl;
            }
        }

        int main() {
            std::thread t(print_numbers);
            t.join(); // Wait for thread to finish

            return 0;
        }
        `
    },
    {
      "topic": "Move Semantics",
      "details": "Move semantics optimize the performance of programs by avoiding unnecessary deep copying of resources. This is achieved using move constructors and move assignment operators.",
      "CodeSnippet": 
        `
        #include <iostream>
        #include <vector>

        class MyClass {
        public:
            MyClass() {
                data = new int[100];
                std::cout << "Constructor" << std::endl;
            }

            // Move constructor
            MyClass(MyClass&& other) noexcept : data(other.data) {
                other.data = nullptr;
                std::cout << "Move Constructor" << std::endl;
            }

            ~MyClass() {
                delete[] data;
                std::cout << "Destructor" << std::endl;
            }

        private:
            int* data;
        };

        int main() {
            std::vector<MyClass> vec;
            vec.push_back(MyClass()); // Move constructor is called

            return 0;
        }
        `
    },
    {
      "topic": "Template Metaprogramming",
      "details": "Template metaprogramming (TMP) allows you to write code that is executed at compile-time. TMP can be used for tasks such as constant expression evaluation, compile-time type selection, and code optimization.",
      "CodeSnippet": 
        `
        #include <iostream>

        // Factorial using template metaprogramming
        template<int N>
        struct Factorial {
            static const int value = N * Factorial<N - 1>::value;
        };

        template<>
        struct Factorial<0> {
            static const int value = 1;
        };

        int main() {
            std::cout << "Factorial of 5: " << Factorial<5>::value << std::endl;
            return 0;
        }
        `
    }
  ],

  Swift: [
    {
      "topic": "Generics",
      "details": "Generics in Swift allow you to write flexible and reusable functions and types that can work with any data type. This helps you avoid code duplication and allows for more expressive and safe code.",
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
        `
    },
    {
      "topic": "Protocols and Protocol-Oriented Programming",
      "details": "Protocols define a blueprint of methods, properties, and other requirements for tasks or functionalities. Protocol-oriented programming (POP) emphasizes the use of protocols as the primary building blocks of your code.",
      "CodeSnippet": 
        `
        protocol Identifiable {
            var id: String { get set }
        }

        struct User: Identifiable {
            var id: String
        }

        func displayID(item: Identifiable) {
            print("Item ID is \(item.id)")
        }

        let user = User(id: "12345")
        displayID(item: user)
        `
    },
    {
      "topic": "Memory Management with ARC",
      "details": "Swift uses Automatic Reference Counting (ARC) to manage memory. ARC automatically keeps track of the references to instances of classes and deallocates them when they are no longer needed.",
      "CodeSnippet": 
        `
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
      "topic": "Concurrency with Swift",
      "details": "Swift provides robust support for concurrency with async/await, DispatchQueue, and OperationQueue. This allows for writing non-blocking code that can run multiple tasks simultaneously.",
      "CodeSnippet": 
        `
        import Foundation

        func fetchData(completion: @escaping (String) -> Void) {
            DispatchQueue.global().async {
                // Simulate network delay
                sleep(2)
                completion("Data fetched")
            }
        }

        fetchData { result in
            print(result)
        }

        // Async/await example
        func fetchAsyncData() async -> String {
            return "Async data fetched"
        }

        Task {
            let data = await fetchAsyncData()
            print(data)
        }
        `
    },
    {
      "topic": "Custom Operators",
      "details": "Swift allows you to define custom operators for your own types. This is particularly useful in DSLs (Domain-Specific Languages) and when overloading existing operators for custom types.",
      "CodeSnippet": 
        `
        infix operator **: MultiplicationPrecedence

        func **(base: Int, power: Int) -> Int {
            return Int(pow(Double(base), Double(power)))
        }

        let result = 2 ** 3
        print("2 to the power of 3 is \(result)")
        `
    }
  ],

  JavaScript: [
    {
      "topic": "Asynchronous Programming with Promises and Async/Await",
      "details": "Promises provide a way to handle asynchronous operations in JavaScript. Async/await, introduced in ES8, is a syntax sugar over Promises, making asynchronous code look more like synchronous code.",
      "CodeSnippet": 
        `
        // Promise example
        function fetchData() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Data fetched");
                }, 2000);
            });
        }

        fetchData().then(result => {
            console.log(result);
        });

        // Async/Await example
        async function fetchDataAsync() {
            let result = await fetchData();
            console.log(result);
        }

        fetchDataAsync();
        `
    },
    {
      "topic": "Closures and Scope",
      "details": "A closure is a function that retains access to its outer scope even after the outer function has returned. Closures are often used in callbacks and event handlers.",
      "CodeSnippet": 
        `
        function outerFunction() {
            let outerVariable = 'I am from outer function';

            function innerFunction() {
                console.log(outerVariable);
            }

            return innerFunction;
        }

        const myInnerFunction = outerFunction();
        myInnerFunction();  // Outputs: I am from outer function
        `
    },
    {
      "topic": "Modules and Imports/Exports",
      "details": "JavaScript modules allow you to break down your code into smaller, reusable pieces. ES6 introduced the import/export syntax, enabling better code organization and reusability.",
      "CodeSnippet": 
        `
        // math.js (module file)
        export function add(a, b) {
            return a + b;
        }

        export function subtract(a, b) {
            return a - b;
        }

        // main.js
        import { add, subtract } from './math.js';

        console.log(add(5, 3));  // Outputs: 8
        console.log(subtract(5, 3));  // Outputs: 2
        `
    },
    {
      "topic": "Event Loop and Concurrency",
      "details": "The JavaScript event loop is a mechanism that handles asynchronous events. It continuously checks the call stack and the callback queue, ensuring that functions are executed at the right time.",
      "CodeSnippet": 
        `
        console.log("Start");

        setTimeout(() => {
            console.log("Timeout callback");
        }, 0);

        console.log("End");

        // Output:
        // Start
        // End
        // Timeout callback
        `
    },
    {
      "topic": "Functional Programming",
      "details": "JavaScript supports functional programming with features like first-class functions, higher-order functions, closures, and immutable data structures.",
      "CodeSnippet": 
        `
        // Higher-order function example
        function createMultiplier(multiplier) {
            return function(num) {
                return num * multiplier;
            };
        }

        const double = createMultiplier(2);
        const triple = createMultiplier(3);

        console.log(double(5));  // Outputs: 10
        console.log(triple(5));  // Outputs: 15
        `
    }
  ],

  Java: [
    {
      topic: "Generics and Collections",
      details: "Generics enable type-safe operations on collections, reducing runtime errors and improving code reusability.",
      CodeSnippet: `
        import java.util.ArrayList;
        import java.util.List;

        public class Main {
            public static void main(String[] args) {
                List<String> list = new ArrayList<>();
                list.add("Hello");
                list.add("World");

                for (String str : list) {
                    System.out.println(str);
                }
            }
        }
      `
    },
    {
      topic: "Streams and Lambda Expressions",
      details: "Streams and lambda expressions provide a functional programming style for processing collections and performing operations like filtering, mapping, and reducing.",
      CodeSnippet: `
        import java.util.Arrays;
        import java.util.List;

        public class Main {
            public static void main(String[] args) {
                List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
                numbers.stream()
                       .filter(n -> n % 2 == 0)
                       .forEach(System.out::println);
            }
        }
      `
    },
    {
      topic: "Concurrency with Executors and Futures",
      details: "Java's Executors framework simplifies the creation and management of thread pools, while Futures allow for asynchronous result handling.",
      CodeSnippet: `
        import java.util.concurrent.ExecutorService;
        import java.util.concurrent.Executors;
        import java.util.concurrent.Future;

        public class Main {
            public static void main(String[] args) throws Exception {
                ExecutorService executor = Executors.newSingleThreadExecutor();

                Future<Integer> future = executor.submit(() -> {
                    Thread.sleep(1000);
                    return 42;
                });

                System.out.println("Future result: " + future.get());

                executor.shutdown();
            }
        }
      `
    }
  ],

  Kotlin: [
    {
      topic: "Coroutines and Asynchronous Programming",
      details: "Kotlin's coroutines simplify asynchronous programming by providing a lightweight, non-blocking way to handle long-running tasks.",
      CodeSnippet: `
        import kotlinx.coroutines.*

        fun main() = runBlocking {
            launch {
                delay(1000L)
                println("World!")
            }
            println("Hello")
        }
      `
    },
    {
      topic: "Extension Functions",
      details: "Extension functions allow you to add new functionality to existing classes without modifying their source code, enhancing code readability and reusability.",
      CodeSnippet: `
        fun String.isPalindrome(): Boolean {
            return this == this.reversed()
        }

        fun main() {
            println("madam".isPalindrome())  // Output: true
        }
      `
    },
    {
      topic: "Type-Safe Builders",
      details: "Type-safe builders in Kotlin are used to create DSLs, providing a concise and type-safe way to construct complex data structures.",
      CodeSnippet: `
        fun html(init: HTML.() -> Unit): HTML {
            val html = HTML()
            html.init()
            return html
        }

        class HTML {
            fun body(init: Body.() -> Unit): Body {
                val body = Body()
                body.init()
                return body
            }
        }

        class Body {
            fun p(text: String) {
                println("Paragraph: $text")
            }
        }

        fun main() {
            val htmlDocument = html {
                body {
                    p("Hello, World!")
                }
            }
        }
      `
    }
  ],

  Ruby: [
    {
      topic: "Metaprogramming",
      details: "Ruby's metaprogramming capabilities allow you to write code that writes code, enabling dynamic method definitions and powerful DSLs.",
      CodeSnippet: `
        class MyClass
          def self.create_method(name)
            define_method(name) do
              puts "You called #{name} method"
            end
          end
        end

        MyClass.create_method(:hello)
        obj = MyClass.new
        obj.hello  # Output: You called hello method
      `
    },
    {
      topic: "Blocks, Procs, and Lambdas",
      details: "Ruby provides blocks, procs, and lambdas for passing code as arguments, allowing for powerful and flexible method implementations.",
      CodeSnippet: `
        def greet(proc)
          proc.call
        end

        say_hello = Proc.new { puts "Hello, World!" }
        greet(say_hello)  # Output: Hello, World!
      `
    },
    {
      topic: "Concurrency with Fibers",
      details: "Fibers in Ruby are lightweight, cooperative threads that provide a means of handling concurrency by manually yielding control between tasks.",
      CodeSnippet: `
        fiber = Fiber.new do
          puts "Fiber started"
          Fiber.yield
          puts "Fiber resumed"
        end

        fiber.resume
        puts "Main program"
        fiber.resume
      `
    }
  ],

  Go: [
    {
      topic: "Goroutines and Channels",
      details: "Goroutines and channels in Go provide powerful concurrency primitives, allowing for easy and efficient handling of concurrent tasks.",
      CodeSnippet: `
        package main

        import (
            "fmt"
            "time"
        )

        func main() {
            c := make(chan string)

            go func() {
                time.Sleep(1 * time.Second)
                c <- "Hello, World!"
            }()

            msg := <-c
            fmt.Println(msg)
        }
      `
    },
    {
      topic: "Interfaces and Polymorphism",
      details: "Go's interfaces allow for polymorphism, enabling the creation of flexible and modular code by specifying the behavior that types must implement.",
      CodeSnippet: `
        package main

        import "fmt"

        type Speaker interface {
            Speak() string
        }

        type Dog struct{}

        func (d Dog) Speak() string {
            return "Woof!"
        }

        type Cat struct{}

        func (c Cat) Speak() string {
            return "Meow!"
        }

        func main() {
            var animals = []Speaker{Dog{}, Cat{}}

            for _, animal := range animals {
                fmt.Println(animal.Speak())
            }
        }
      `
    },
    {
      topic: "Error Handling and Defer",
      details: "Go provides explicit error handling through return values, and the defer statement allows for resource cleanup and final actions.",
      CodeSnippet: `
        package main

        import (
            "fmt"
            "os"
        )

        func main() {
            f, err := os.Open("file.txt")
            if err != nil {
                fmt.Println(err)
                return
            }
            defer f.Close()

            // Process the file
            fmt.Println("File opened successfully")
        }
      `
    }
  ],

  Rust: [
    {
      topic: "Ownership and Borrowing",
      details: "Rust's ownership and borrowing system ensures memory safety by enforcing strict rules on how memory is accessed and modified.",
      CodeSnippet: `
        fn main() {
            let s1 = String::from("Hello");
            let s2 = s1;  // s1 is moved to s2
            println!("{}", s2);

            let s3 = String::from("World");
            let s4 = &s3;  // s3 is borrowed by s4
            println!("{}", s4);
        }
      `
    },
    {
      topic: "Concurrency with Threads",
      details: "Rust provides safe concurrency with threads and channels, ensuring that data races are avoided while allowing parallel execution.",
      CodeSnippet: `
        use std::thread;

        fn main() {
            let handle = thread::spawn(|| {
                for i in 1..10 {
                    println!("Thread: {}", i);
                }
            });

            for i in 1..5 {
                println!("Main: {}", i);
            }

            handle.join().unwrap();
        }
      `
    },
    {
      topic: "Traits and Generics",
      details: "Traits in Rust allow for defining shared behavior, and generics enable writing flexible and reusable code that works across different types.",
      CodeSnippet: `
        struct Point<T> {
            x: T,
            y: T,
        }

        impl<T> Point<T> {
            fn new(x: T, y: T) -> Self {
                Point { x, y }
            }
        }

        fn main() {
            let int_point = Point::new(1, 2);
            let float_point = Point::new(1.0, 2.0);

            println!("Int Point: ({}, {})", int_point.x, int_point.y);
            println!("Float Point: ({}, {})", float_point.x, float_point.y);
        }
      `
    }
  ],

  TypeScript: [
    {
      topic: "Type Inference and Annotations",
      details: "TypeScript adds type safety to JavaScript by inferring types and allowing explicit annotations, reducing runtime errors.",
      CodeSnippet: `
        let num: number = 42;
        let greeting: string = "Hello, World!";
        let isActive: boolean = true;

        function add(a: number, b: number): number {
            return a + b;
        }

        console.log(add(5, 10));  // Output: 15
      `
    },
    {
      topic: "Generics and Interfaces",
      details: "Generics and interfaces in TypeScript allow you to create flexible and reusable components and functions, ensuring type safety across different use cases.",
      CodeSnippet: `
        interface Pair<T> {
            first: T;
            second: T;
        }

        function createPair<T>(a: T, b: T): Pair<T> {
            return { first: a, second: b };
        }

        let stringPair = createPair("Hello", "World");
        let numberPair = createPair(1, 2);

        console.log(stringPair);  // Output: { first: 'Hello', second: 'World' }
        console.log(numberPair);  // Output: { first: 1, second: 2 }
      `
    },
    {
      topic: "Asynchronous Programming with Promises and Async/Await",
      details: "TypeScript provides strong typing for asynchronous code, improving the readability and maintainability of complex workflows.",
      CodeSnippet: `
        function fetchData(): Promise<string> {
            return new Promise((resolve) => {
                setTimeout(() => resolve("Data fetched"), 2000);
            });
        }

        async function fetchAsyncData(): Promise<void> {
            const data = await fetchData();
            console.log(data);
        }

        fetchAsyncData();  // Output: Data fetched
      `
    }
  ],

  Welcome: [
    {
      topic: "Deep Dive into Language Features",
      details: "After mastering the basics, focus on understanding the advanced features of the language. This includes exploring language-specific optimizations, memory management, and advanced data structures."
    },
    {
      topic: "Performance Optimization",
      details: "Learn about profiling tools and techniques to identify bottlenecks in your code. Focus on optimizing algorithms, reducing memory usage, and improving runtime efficiency."
    },
    {
      topic: "Concurrency and Parallelism",
      details: "Explore how your chosen language handles concurrent and parallel execution. Understand threading, async operations, and best practices for writing non-blocking code."
    },
    {
      topic: "Design Patterns and Architecture",
      details: "Study common design patterns like Singleton, Factory, Observer, and MVC/MVVM architectures. Understand when and how to apply these patterns to create scalable and maintainable codebases."
    },
    {
      topic: "Advanced Data Structures and Algorithms",
      details: "Go beyond basic arrays and lists to explore advanced data structures like trees, graphs, and hash tables. Study algorithms for sorting, searching, and complex operations on these data structures."
    },
    {
      topic: "Security Best Practices",
      details: "Learn about security vulnerabilities and best practices to secure your applications. Topics include input validation, cryptography, authentication, and secure coding standards."
    },
    {
      topic: "Frameworks and Libraries Mastery",
      details: "Master the popular frameworks and libraries associated with your language. Dive deep into their advanced features and understand how to extend and optimize them for your projects."
    },
    {
      topic: "Testing and Debugging",
      details: "Enhance your testing and debugging skills by learning about unit testing, integration testing, and test-driven development (TDD). Understand how to use advanced debugging tools to track down and fix complex bugs."
    },
    {
      topic: "Contribution to Open Source",
      details: "Start contributing to open-source projects. This will help you learn from real-world codebases, collaborate with other developers, and improve your coding skills."
    },
    {
      topic: "Building Complex Projects",
      details: "Take on complex projects that push your skills to the limit. Examples include building a compiler, a real-time multiplayer game, or a machine learning model. These projects will solidify your understanding of advanced topics."
    },
    {
      topic: "Specialization in a Niche",
      details: "Identify a niche area where you want to specialize, such as data science, AI, web development, or mobile apps. Focus on deepening your knowledge and building expertise in that area."
    },
    {
      topic: "Continuous Improvement",
      details: "Keep refining your skills by staying updated with the latest developments in your field. Regularly participate in coding challenges, hackathons, and workshops to sharpen your expertise."
    },
    {
      topic: "Mentoring and Teaching",
      details: "Share your knowledge by mentoring others or teaching. This not only reinforces your learning but also helps build a reputation in the community as an expert in your field."
    }
  ]


  }
  
export default AdvancedData