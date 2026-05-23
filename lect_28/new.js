// ==========================================
// 🔴 JAVASCRIPT DATA TYPES & MUTABILITY NOTES
// ==========================================

// -------------------------------------------------------------
// 📑 PRIMITIVE DATA TYPES
// Definition: Yeh JavaScript ke base/basic data types hote hain jo single value hold karte hain. 
// Inka size fixed hota hai aur yeh hamesha 'Stack Memory' me store hote hain.
// Total 7 types ke hain: number, string, boolean, undefined, null, bigint, symbol.
// -------------------------------------------------------------

// ---- 1. NUMBER ----
// Definition: Integers (normal numbers) aur Floating-point (decimal) numbers dono hi 'number' category me aate hain.
// JavaScript me numbers ko store karne ke liye internally 8 Bytes (64-bit) ki memory milti hai.
let a = 10;
let b = 2.36;
console.log(a, b);
console.log(typeof a); // Output: "number"

// ---- 2. STRING ----
// Definition: Text data ko represent karne ke liye use hota hai. Aap ise Double Quotes ("") ya Single Quotes ('') dono me likh sakte hain.
let c = "Hello World";
let d = "OM";
console.log(typeof d); // Output: "string"
console.log(c, d);

// ---- 3. BOOLEAN ----
// Definition: Yeh sirf do hi values holds karta hai: true (sahi) ya false (galat). Logics aur conditions me use hota hai.
let login = true;
let f = false;
console.log(login);
console.log(typeof f); // Output: "boolean"

// ---- 4. UNDEFINED ----
// Definition: Jab hum ek variable declare (bana) toh dete hain par use koi value nahi dete (unintentional absence of value), 
// toh JavaScript internally use "undefined" value aur type assign kar deta hai.
let user;
console.log(typeof user); // Output: "undefined"

// ---- 5. BIGINT ----
// Definition: Jab aapka number bahut bada ho (jo normal 8 Bytes ke number me fit na aaye, i.e., greater than 2^53 - 1),
// tab hum BigInt ka use karte hain. Number ke piche 'n' lagana zaroori hai.
let n = 2235675688786547658567676867565n;
console.log(n);
console.log(typeof n); // Output: "bigint"

// ---- 6. NULL ----
// Definition: Jab ek developer khud jaan-bujhkar (intentionally) kisi variable ko khali rakhna chahta hai, toh 'null' assign karta hai.
// Real-world example (Weather API):
// Case 1: Weather mil gaya -> 25 (Number)
// Case 2: City hai par system abhi temp nahi nikal pa raha -> null (Intentional blank)
// Case 3: City hi database me nahi hai -> undefined (Does not exist)
let weather = null;
console.log(weather); 
console.log(typeof weather); 
// ⚠️ BUG IN JAVASCRIPT: typeof null hamesha "object" nikalta hai. Yeh JS ka ek purana bug/legacy error hai jo aaj tak theek nahi kiya gaya taaki purani websites kharab na hon.

// ---- 7. SYMBOL ----
// Definition: Yeh hamesha ek ekdum Unique aur Immutable (un-changeable) identifier generate karne ke liye use hota hai.
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2); // Output: false (Kyunki har Symbol unique hota hai, bhale hi andar ka text same ho)
console.log(typeof id1); // Output: "symbol"


// -------------------------------------------------------------
// 📑 NON-PRIMITIVE DATA TYPES (REFERENCE TYPES)
// Definition: Yeh complex data structures hote hain jo multiple values store kar sakte hain. 
// Inka size fixed nahi hota, isliye yeh 'Heap Memory' me store hote hain aur inka reference/address copy hota hai.
// In sabhi ka 'typeof' hamesha "object" hi nikalta hai (Function ek exception jaisa dikhta hai par internally wo bhi object hai).
// -------------------------------------------------------------

// ---- 1. ARRAY ----
// Definition: Ek single variable me multiple values (same ya different data types ki) ko ek list ke roop me store karne ke liye use hota hai.
let arr = [10, 20, 30, "Rohit", true];
console.log(typeof arr); // Output: "object" (JavaScript me Array bhi internally ek Object hi hai)

// ---- 2. OBJECT ----
// Definition: Data ko meaningful banane ke liye 'Key-Value' pair me store karta hai. Jaise data khali ghumne ke bajay pata chale ki 'name' kya hai aur 'age' kya hai.
let userObj = {
    name: "Vartika",
    account: 12234,
    age: 18,
    category: 'gen'
}; 
console.log(typeof userObj); // Output: "object"

// ---- 3. FUNCTION ----
// Definition: Ek reusable block of code jo koi specific task perform karta hai. 
// JavaScript me functions ko hum normal variables ki tarah treat kar sakte hain (Variable me store kar sakte hain).
function add() {
    console.log("Hello");
}
add();

// Function Expression (Function ko variable me store karna):
let s = function add() {
    console.log("Hello");
}
s(); // Variable ke naam se function call ho raha hai
console.log(typeof s); // Output: "function" (Bhaiya ne bataya ki padhne me 'function' aata hai par internally yeh bhi ek object hi hai)


// -------------------------------------------------------------
// 🧠 IMMUTABILITY VS MUTABILITY (INTERNALS)
// -------------------------------------------------------------

// ⚡ PRIMITIVE DATA TYPES ARE IMMUTABLE (Value badli nahi ja sakti)
// Definition: Jab aap ek primitive variable ki value बदलते ho, toh purani value change nahi hoti, 
// balki memory me ek naya block banta hai aur variable naye block ko point karne lagta hai.

let x = 10;
let y = x; // y ko x ki value mil gayi (Copy by Value)
y = 20;    // y ne naya block (20) le liya, x abhi bhi 10 wale block ko hi point kar raha hai.
console.log(x, y); // Output: 10, 20

// Proof of Immutability in Strings:
let str = "Rohit";
str[0] = "M"; // Humne original text ke 'R' ko 'M' karne ki koshish ki, par JS ne reject kar diya!
console.log(str); // Output: "Rohit" (Kyunki original string ko beech me se badla nahi ja sakta)

str = "Mohan"; // Yeh allowed hai, kyunki isse "Rohit" nahi badla, memory me ek alag naya block "Mohan" bana aur str use point karne laga.


// ⚡ NON-PRIMITIVE DATA TYPES ARE MUTABLE (Value badli ja sakti hai)
// Definition: Inke andar ki values ko bina naya block banaye directly usi memory location par jaakar modify/change kiya ja sakta hai.

let myArr = [10, 20, 30, 40];
myArr.push(90); // Original array ke piche 90 add ho gaya
myArr[0] = 70;  // Index 0 par 10 ko hata kar 70 kar diya (Mutation Allowed!)
console.log(myArr); // Output: [70, 20, 30, 40, 90]

// 🔗 NON-PRIMITIVE COPIES BY REFERENCE (Address Share Karna)
// Definition: Jab aap ek object ko dusre variable me assign karte ho, toh data copy nahi hota, 
// balki dono variables memory ke ek hi same address (reference) ko point karne lagte hain.
let obj = {
    name: "Mohit",
    age: 20
};

let obj2 = obj; // obj2 ko obj ka memory address mil gaya (Dono ek hi data share kar rahe hain)

obj2.name = "Rohit"; // obj2 ke through name badla...
console.log(obj); // Output: { name: 'Rohit', age: 20 } -> Original obj ka naam bhi badal gaya!

// Why this philosophy? (Bhaiya ka reason): 
// Primitive types (jaise number/boolean) bahut chote hote hain (1-8 bytes), unhe copy karne me memory waste nahi hoti.
// Par Non-Primitive (Objects/Arrays) me hazaron elements ho sakte hain (size MBs me ho sakta hai). Agar har baar nayi copy banayi toh RAM crash ho jayegi. Isliye memory bachane ke liye yeh Reference/Address share karte hain.


// Main Takeaway jo aapko yaad rakhna hai:
// 1)Primitive = Copy by Value (Har ek variable apni alag memory banata hai, ek ko badalne par dusra nahi badalta).

// 2)Non-Primitive = Copy by Reference (Dono variable ek hi data ko point karte hain, ek jagah badloge toh sabhi variables me badal jayega).