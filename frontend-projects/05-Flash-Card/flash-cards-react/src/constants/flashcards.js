export const FLASHCARD_DATA = [
    {
        id: 1,
        question: 'What is JavaScript?',
        answer: 'JavaScript is a high-level, interpreted programming language primarily known for making websites interactive. Think of it as the "action" part of a webpage — it controls behavior, responds to user input, and updates content dynamically.',
    },
    {
        id: 2,
        question: 'Why should you learn JavaScript?',
        answer: 'JavaScript is the only programming language that runs natively in browsers, making it essential for web development. It also runs on servers (Node.js), mobile apps, and more — making it one of the most versatile and in-demand languages in the world.',
    },
    {
        id: 3,
        question: 'What are variables in JavaScript?',
        answer: 'A variable is a named container that stores a value. You declare variables using var, let, or const. Example: let age = 25; — here "age" is the variable holding the value 25.',
    },
    {
        id: 4,
        question: 'What is the difference between var, let, and const?',
        answer: 'var is function-scoped and can be re-declared (older, avoid it). let is block-scoped and can be reassigned. const is block-scoped and cannot be reassigned after declaration. Prefer const by default, use let when you need to reassign.',
    },
    {
        id: 5,
        question: 'What are the different data types in JavaScript?',
        answer: 'There are 7 primitive types: String ("hello"), Number (42), Boolean (true/false), Null (intentional empty value), Undefined (variable declared but not assigned), BigInt (very large integers), and Symbol (unique identifiers). Everything else, like arrays and functions, is an Object.',
    },
    {
        id: 6,
        question: 'What are functions in JavaScript?',
        answer: 'A function is a reusable block of code designed to perform a specific task. You define it once and call it whenever needed. Example: function greet(name) { return "Hello, " + name; } — calling greet("Alice") returns "Hello, Alice".',
    },
    {
        id: 7,
        question: 'What are operators in JavaScript?',
        answer: 'Operators perform operations on values. Key types include: Arithmetic (+, -, *, /), Comparison (==, ===, >, <), Logical (&&, ||, !), Assignment (=, +=, -=), and Ternary (condition ? valueIfTrue : valueIfFalse).',
    },
    {
        id: 8,
        question: 'What are arrays in JavaScript?',
        answer: 'An array is an ordered list of values stored in a single variable. Example: let fruits = ["apple", "banana", "cherry"]. Items are accessed by their index starting at 0, so fruits[0] is "apple". Arrays have built-in methods like .push(), .pop(), .map(), and .filter().',
    },
    {
        id: 9,
        question: 'What are objects in JavaScript?',
        answer: 'An object stores data as key-value pairs. Example: let person = { name: "Alice", age: 30 }. You access values using dot notation (person.name) or bracket notation (person["name"]). Objects are the foundation of JavaScript — almost everything is an object.',
    },
    {
        id: 10,
        question: 'What is the difference between "==" and "===" operators?',
        answer: '"==" checks for equality in value only and performs type coercion (e.g., 5 == "5" is true). "===" checks for equality in both value AND type, so 5 === "5" is false. Always prefer === to avoid unexpected bugs caused by type coercion.',
    },
    {
        id: 11,
        question: 'What is a callback function?',
        answer: 'A callback is a function passed as an argument to another function, to be executed later. Example: setTimeout(function() { console.log("Hello!"); }, 1000) — the anonymous function is the callback, executed after 1 second. Callbacks are fundamental to asynchronous JavaScript.',
    },
    {
        id: 12,
        question: 'What is the difference between null and undefined?',
        answer: 'undefined means a variable has been declared but not yet assigned a value — JavaScript sets this automatically. null is an intentional assignment meaning "no value" — a developer sets it on purpose. Think of undefined as "not yet set" and null as "intentionally empty".',
    },
    {
        id: 13,
        question: 'What is the DOM in JavaScript?',
        answer: 'The DOM (Document Object Model) is a tree-like representation of an HTML page that JavaScript can read and manipulate. Using the DOM, you can select elements (document.getElementById()), change content, modify styles, and respond to user events — making pages interactive.',
    },
    {
        id: 14,
        question: 'What is event delegation in JavaScript?',
        answer: 'Event delegation is a technique where you attach a single event listener to a parent element instead of many listeners to child elements. When a child is clicked, the event "bubbles up" to the parent. This is more efficient and works for dynamically added elements.',
    },
    {
        id: 15,
        question: 'What are Promises in JavaScript?',
        answer: 'A Promise represents a value that will be available in the future — either resolved (success) or rejected (failure). It helps manage async operations more cleanly than callbacks. Example: fetch(url).then(response => response.json()).catch(error => console.log(error)).',
    },
    {
        id: 16,
        question: 'What is async/await in JavaScript?',
        answer: 'async/await is modern syntax built on top of Promises that makes asynchronous code look and read like synchronous code. Mark a function with async, then use await before a Promise to pause execution until it resolves. This makes async code much easier to read and debug.',
    },
    {
        id: 17,
        question: 'What is closure in JavaScript?',
        answer: 'A closure is when an inner function remembers and accesses variables from its outer function, even after the outer function has finished executing. Example: function counter() { let count = 0; return function() { return ++count; }; } — the inner function "closes over" the count variable.',
    },
    {
        id: 18,
        question:
            'What is the difference between .map(), .filter(), and .reduce()?',
        answer: '.map() transforms every element in an array and returns a new array of the same length. .filter() returns a new array containing only elements that pass a condition. .reduce() accumulates all elements into a single value (like a sum or object). All three are non-destructive — they do not modify the original array.',
    },
    {
        id: 19,
        question: 'What is the difference between "==" and "===" operators?',
        answer: 'Hoisting is JavaScript\'s behavior of moving declarations to the top of their scope before code runs. var declarations are hoisted and initialized as undefined. Function declarations are fully hoisted. let and const are hoisted but not initialized — accessing them before declaration throws a ReferenceError (the "temporal dead zone").',
    },
    {
        id: 20,
        question:
            'What is the difference between synchronous and asynchronous JavaScript?',
        answer: 'Synchronous code runs line by line — each line must finish before the next starts. Asynchronous code allows operations (like fetching data or timers) to run in the background without blocking the rest of the code. JavaScript uses the Event Loop to handle async tasks, keeping the UI responsive while waiting for results.',
    },
]
