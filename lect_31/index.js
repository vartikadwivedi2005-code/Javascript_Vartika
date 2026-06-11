// // Arithmetic Operators in JavaScript
// console.log(5 + 10); // 15
// console.log(5 - 10); // -5
// console.log(5 * 10); // 50
// console.log(5 / 10); // 0.5
// console.log(5 % 10); // 5 (modulus operator gives the remainder of the division)


// // Assignment Operators
// let x = 5;
// x += 10; // x = x + 10; x is now 15
// x -= 5; // x = x - 5; x is now 10
// x *= 2; // x = x * 2; x is now 20
// x /= 4; // x = x / 4; x is now 5
// x %= 3; // x = x % 3; x is now 2


// // Comparison Operators
// console.log(5 == "5"); // true (loose equality, checks value only)
// console.log(5 === "5"); // false (strict equality, checks value and type)
// console.log(5 != "5"); // false (loose inequality, checks value only)
// console.log(5 !== "5"); // true (strict inequality, checks value and type)
// console.log(5 > 3); // true
// console.log(5 < 3); // false
// console.log(5 >= 5); // true
// console.log(5 <= 4); // false
// console.log(5==3); // false
// console.log(5!=3); // true


// let z = "10";
// let a = Number(z);   // a = parseInt(z); parseInt() is used to convert a string to an integer, while Number() can convert a string to a number (which can be an integer or a floating-point number). In this case, since "10" is a valid integer, both functions will yield the same result.

// console.log(a);
// console.log(typeof a);


// String -> Number
// let a = "121ac";
// let b = Number(a); // This will result in NaN (Not a Number) because "121ac" cannot be converted to a valid number.
// console.log(b);
// console.log(typeof b);


// console.log(0 / 0); // This will also result in NaN because division of zero by zero is undefined in mathematics.


// Number -> String
// let a = 10;
// let b = String(a); // This will convert the number 10 to the string "10"
// console.log(b);
// console.log(typeof b);


// let a = true;
// console.log(a); // true
// console.log(typeof a); // boolean
// console.log(Number(true)); // 1 (when converting true to a number, it becomes 1)
// console.log(String(true)); // "true" (when converting true to a string, it becomes "true")


// let b = false;
// console.log(b); // false
// console.log(typeof b); // boolean
// console.log(Number(false)); // 0 (when converting false to a number, it becomes 0)
// console.log(String(false)); // "false" (when converting false to a string, it becomes "false")


// console.log(Number(null)); // 0 (when converting null to a number, it becomes 0)
// console.log(String(null)); // "null" (when converting null to a string, it becomes "null")

// console.log(Number(undefined)); // NaN (when converting undefined to a number, it becomes NaN)
// console.log(String(undefined)); // "undefined" (when converting undefined to a string, it becomes "undefined")

// null--> 0
// undefined--> NaN

// console.log(String(true));
// console.log(typeof String(true));
// console.log(String(undefined));
// console.log(typeof String(null));


// Boolean convertion

// console.log(Boolean(0));
// console.log(Boolean('Hello World'));

// computer science challenge
// let a = 0.1
// let b = 0.2

// let c = a+b
// console.log(c==0.3);
// console.log(c);

// 1: null is loosely equal to undefined only

console.log(null==undefined);
console.log(null===undefined);
console.log(null==0);
console.log(null=="");
console.log(null==false);
console.log(null==true);

