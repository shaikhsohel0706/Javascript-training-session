console.log("hi");

//The let and const keywords allow you to declare variables with block scope
     // and immutable bindings, respectively.
      // Using let
      let x = 10;
      if (true) {
        let x = 20;
        console.log(x); // Output: 20
      }
      console.log(x); // Output: 10

      // Using const
      const PI = 3.14159;
      //PI = 3.14; // Error: Assignment to constant variable

      //Arrow Functions:provide a concise syntax for writing function expressions.
      // Regular function
     function Add(a, b) {
     return a + b;
     }
    // Arrow function
    const add = (a, b) => a + b;

    //Template literals: allow for easier string interpolation and multiline strings.

    var name = "Alice";
    const greeting = `Hello, ${name}!
    How are you today?`;
   console.log(greeting);
   // Output:
   // Hello, Alice!
   // How are you today?

   //Destructuring assignment: allows you to extract values from arrays or objects into variables.
     // Array destructuring
    var [X, Y] = [1, 2];

    // Object destructuring
    var { name, age } = { name: "Alice", age: 30 };

    
    //spread oprater(...) allows you to spread elements of an iterable (like arrays) 
    //into places where multiple elements are expected.
    // Array spread
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

   // Object spread
   const obj1 = { a: 1, b: 2 };
   const obj2 = { c: 3, d: 4 };
   const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
   

   //The rest parameter syntax (...) in JavaScript allows you to represent
   // an indefinite number of arguments as an array.
   const numbers = [1, 2, 3, 4, 5];
   const [first, ...rest] = numbers;

   console.log(first);  // Output: 1
   console.log(rest);   // Output: [2, 3, 4, 5]

   //Classes: ES6 introduced a more concise syntax for creating classes and working with inheritance.
   class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 3);
console.log(rect.area()); // Output: 15

 
