// callbind
// 1. this Keyword
// Inside a JavaScript function, this acts like a pronoun. It refers to the object that currently "owns" or is executing the code. By default, inside obj.fullName(), this refers to obj.

// 2. Method Borrowing
// This is a pattern where an object uses a method belonging to another object, without copying the code or redefining it. In your code, user is borrowing the fullName function from obj.

// 3. Function.prototype.apply()
// The .apply() method executes a function while forcing its this keyword to point to a specific target object. It takes exactly two parameters:

// The Context: The object you want this to point to (in your case, user).

// The Arguments: An array [] of data you want to pass into the function.

// call vs apply with arguments
// Now that the function accepts arguments, the difference between call and apply comes down to how you pack your bags:

// .call() wants arguments passed in one by one, separated by commas.

// .apply() wants arguments packed into a single array [].


// let obj={
//     id:1,
//     firstName:"Vartika",
//     lastName:"Dwivedi",
//     fullName:function(city){
//       console.log(this.firstName + " " + this.lastName + " from " + city);
//     }
// }

// let user={
//     id:1,
//     firstName:"Meethi",
//     lastName:"Shukla"
// }
// obj.fullName.call(user,"bhopal")

// obj.fullName.apply(user,["bhopal"])


// let obj={
//     id:1,
//     name:"Vartika"
// }
// let user={...obj}
// user.name="hello"
// console.log(user.name)
// console.log(obj.name)

// let user=obj
// user.name="hello"
// console.log(user.name)
// console.log(obj.name)


// deep copy and shallow copy

// let obj={
//     id:1,
//     name:"Vartika",
//     address:{
//         city:"delhi"
//     }
// }
// let user={...obj}
// user.address.city="goa"
// console.log(user.address.city);
// console.log(obj.address.city);


// let user=obj     //refernece copy
// user.address.city="goa"
// console.log(user.address.city);
// console.log(obj.address.city)

// let user=structuredClone(obj);


// let str ="js  js   js"
// console.log(str.replace("js","jsx"));
// console.log(str.replaceAll("js","jsx"));
// console.log(str.split(""));
// console.log(str.charAt(0));
// console.log(str.length);
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());
// console.log(str.length);
// console.log(str.trim());
// console.log(str.includes("s"));
// console.log(str.indexOf("j"));
// console.log(str.substring(0,4),"substring");
// console.log(str.substr(0,4),"substring");
console.log(str.split("").reverse().join(""));











