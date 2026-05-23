// // variabke ko banane ka tarkika

// 1. let (Modern & Recommended)
// Re-assign ho sakta hai: Isme aap variable ki value ko baad me badal (change) sakte hain.

// Re-declare nahi ho sakta: Ek baar let name bana diya, toh usi scope me dobara let name nahi likh sakte.

// Block Scope: Yeh sirf usi curly braces {} ke andar kaam karta hai jahan ise banaya gaya ho.


let name = "Vartika";
console.log(name);
let age = 20;
age=30;
console.log(age);
console.log(name,age);


// 2. const (Constant yani Fixed)
// Value Fixed rehti hai: Ek baar jo value de di, use aap pure code me badal nahi sakte.

// Re-declare bhi nahi ho sakta.

// Use kab karein? Jab aapko pata ho ki yeh value kabhi change nahi hogi (jaise Account Number, Pi ki value, etc.)


const account = 1234;
// account = 23;
console.log(account);

// 3. var (Old Way - Isse bacho! ❌)
// Global/Function Scope: Yeh curly braces {} (blocks) ko nahi maanta. Agar aapne ise kisi if condition ya loop ke andar banaya hai, toh bhi yeh bahar se access ho jata hai.

// Re-declare ho sakta hai: Ek hi naam ka variable baar-baar bana sakte ho, jisse purani value galti se delete ho sakti hai. Is wajah se ab var ka use nahi kiya jata.


// old tarika
// var a =10;
// var a =30;

// if(true){
//     var a =10;
// }
// console.log(a);

// Note: Agar aap yahan var a ki jagah let a likhte, toh console.log(a) karne par Error aata, kyunki let block ke bahar nahi jata. Wahi sahi tareeqa hai.
// let	Haan ✅	Block {}	Nahi ❌
// const	Nahi ❌	Block {}	Nahi ❌
// var	Haan ✅	Global / Function Haan ✅ (Isliye dangerous hai)


