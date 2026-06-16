// // // // import {useState} from 'react'

// // // // const App = () => {
// // // //    let [count, setCount] =     useState(0)
// // // //    function fun1(){
// // // //     setCount(count+1)
// // // //    }
// // // //   return (
// // // //     <div>
// // // //       <h3>{count}</h3>
// // // //       <button onClick={fun1}>click</button>  
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App



// // // // // [ User clicks button ] 
// // // // //           │
// // // // //           ▼
// // // // //     Triggers fun1()
// // // // //           │
// // // // //           ▼
// // // // //   setCount(count + 1)
// // // // //           │
// // // // //           ▼
// // // // // React re-renders App component 
// // // // //           │
// // // // //           ▼
// // // // // Screen updates with new count



// // // // import React, { useState } from 'react'

// // // // const App = () => {
// // // //   const [color, setColor] = useState("pink")

// // // //   function fun1() {
// // // //     setColor("lightblue")
// // // //   }

// // // //   return (
// // // //     <div style={{ backgroundColor: color, height: "100vh" }}>
// // // //       <button onClick={fun1}>Change to light blue</button>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App



// // // // import React from 'react'

// // // // const App = () => {
// // // //   return (
// // // //     <div>
// // // //       <Home />
// // // //     </div>
// // // //   )
// // // // }
// // // // const Home = () => {
// // // //   return (
// // // //     <div>Helloo</div>
// // // //   )
// // // // }

// // // // export default App



// // // // import React from 'react'
// // // // import Home from './Home'
// // // // const App = () => {
// // // //   return (
// // // //     <div>
// // // //       <Home/>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App



// // // // import React from 'react'

// // // // const App = () => {
// // // //   return (
// // // //     <div>App</div>
// // // //   )
// // // // }

// // // // export default App



// // // // import React from 'react'
// // // // // import Home from './Home'

// // // // import New, { About } from './New'
// // // // const App = () => {
// // // //   return (
// // // //     <div>
// // // //       <New/>
// // // //       <About/>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App



// // // // import React from 'react'
// // // // import Home from './Home'
// // // // const App = () => {
// // // //   let data="hellooo"
// // // //   return (
// // // //     <div>
// // // //       <Home a={data}/>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App



// // // // import React from 'react'
// // // // import Home from './Home'

// // // // const App = () => {
// // // //   let data="hellooo"
// // // //   return (
// // // //     <div>
// // // //       <Home a={data}/>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App



// // // // import {useState} from 'react'
// // // // const App = () => {
// // // //    let [count, setCount] =     useState(0)
// // // //    function fun1(){
// // // //     setCount(count+1)
// // // //    }
// // // //    function fun2(){
// // // //     setCount(count-1)
// // // //    }
// // // //    function fun3(){
// // // //     setCount(0)
// // // //    }
// // // //   return (
// // // //     <div>
// // // //       <h3>{count}</h3>
// // // //       <button onClick={fun1}>++</button> 
// // // //       <button onClick={fun2}>--</button> 
// // // //       <button onClick={fun3}>reset</button>
// // // //     </div>
// // // //   )
// // // // }

// // // // // export default App

// // // // import React from 'react'
// // // // import { useState } from 'react'
// // // // import Form from './Form'
// // // // const App = () => {
// // // //   let [input, setInput] =    useState("")
// // // //   let [data, setData] =      useState("")
// // // //   function fun1(e){
// // // //     setInput(e.target.value)
// // // //   }
// // // //   function done(){
// // // //     setData(input)
// // // //     setInput("")
// // // //   }
// // // //   return (
// // // //     <div>
// // // //       <h2>{data}</h2>
// // // //       <input type="text" name="input" value={input} onChange={fun1}/>
// // // //       <button onClick={done}>click</button>
      
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App


// // // // import React from 'react'
// // // // import Form from './Form'

// // // // const App = () => {
// // // //   return (
// // // //     <div>
// // // //       <Form/>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App

// // // // Use Effect

// // // // import {useState} from 'react'
// // // // import { useEffect } from 'react'
// // // // const App = () => {
// // // //   let [count, setCount] = useState(0)
// // // //   useEffect(()=>{
// // // //     console.log("hello")
// // // //   }, [])

// // // //   return (
// // // //     <div>
// // // //       <h3>{count}</h3>
// // // //       <button onClick={()=>setCount(count+1)}>click</button>
// // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App


// // // // // Use Effect city change

// // // // // import {useState} from 'react'
// // // // // import { useEffect } from 'react'
// // // // // const App = () => {
// // // // //   let [count, setCount] = useState(0)
// // // // //   let [city, setCity] = useState("Indore")
// // // // //   useEffect(()=>{
// // // // //     console.log("hello")
// // // // //   }, [])

// // // // //   return (
// // // // //     <div>
// // // // //       <h3>{count}</h3>
// // // // //       <h2>{city}</h2>
// // // // //       <button onClick={()=>setCount(count+1)}>click</button>
// // // // //       <button onClick={(e)=>setCity("Bhopal")}>Change</button>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App

// // // // import {useState} from 'react'
// // // // import { useEffect } from 'react'

// // // // fetch("https://dummyjson.com/products").then((res)=>res.json()).then((data)=>{
// // // //   console.log(data);
// // // // })
// // // // const App = () => {
// // // //   let [count, setCount] = useState(0)
// // // //   let [city, setCity] = useState("Indore")
// // // //   useEffect(()=>{
// // // //     console.log("hello")
// // // //   }, [])

// // // //   return (
// // // // //     <div>
// // // // //      <h3>{count}</h3> 
// // // // //       <h2>{city}</h2>
// // // //       // <button onClick={()=>setCount(count+1)}>click</button>
// // // // //       <button onClick={(e)=>setCity("Bhopal")}>Change</button>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App

// // // import { useState, useEffect } from 'react';
// // // import './App.css';
// // // const App = () => {
// // //   let [ApiData, setApiData] = useState([]);

// // //   useEffect(() => {
// // //     fetch("https://dummyjson.com/products")
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         setApiData(data.products);
// // //       })
// // //   }, [])

// // //   return (
// // //     <div className="products-container">
// // //       <h2 className="main-title">Explore Our Products</h2>
// // //       <div className="products-grid">
// // //         {ApiData.map((a) => {
// // //           return (
// // //             <div className="cart-card" key={a.id}>
// // //               <img src={a.thumbnail} alt={a.title} />
// // //               <div className="card-body">
// // //                 <div className="product-id">#{a.id}</div>
// // //                 <div className="product-title">{a.title}</div>
// // //                 <div className="product-price">${a.price}</div>
// // //                 <div className="product-rating">⭐ {a.rating}</div>
// // //               </div>
// // //               <button className="add-to-cart-btn">Add to Cart</button>
// // //             </div>
// // //           );
// // //         })}
        
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // // export default App


// // // import React from 'react'
// // // import Task from './Task'

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <Task/>
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // import React from 'react'
// // // import NavBar from "./NavBar"
// // // import { Route, Routes } from "react-router-dom"
// // // import Home from "./Home"
// // // import About from "./About"
// // // import Task from "./Task"
// // // import ContactUs from "./ContactUs"

// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <NavBar/>
// // //       <Routes>
// // //         <Route    path="/"   element={<Home/>}/>
// // //         <Route    path="/about"   element={<About/>}/>
// // //         <Route    path="/task"   element={<Task/>}/>
// // //         <Route    path="/contact"   element={<ContactUs/>}/>
// // //       </Routes>
// // //     </div>
// // //   )
// // // }

// // // // export default App


// // // // import React from 'react'
// // // // import ToDoList from './ToDoList'

// // // // const App = () => {
// // // //   return (
// // // //     <div>
// // // //       <ToDoList/>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App


// // // // import React from 'react'
// // // // import Home from './Home'


// // // // const App = () => {
// // // //   return (
// // // //     <div>
// // // //         <Home/>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App


// // // import React, { useState } from 'react'
// // // import { Route, Routes } from "react-router-dom"
// // // import Home from "./Home"
// // // import NavBar from "./NavBar"
// // // import Cart from "./Cart"
// // // import About from './About'

// // // const App = () => {
// // //   let [apiData, SetApiData] = useState([])
// // //   let [cart, SetCart] = useState([])

// // //   return (
// // //     <div>
// // //       {/* Global Style reset directly injected to make sure pages look cohesive */}
// // //       <style>{`
// // //         * {
// // //           margin: 0;
// // //           padding: 0;
// // //           box-sizing: border-box;
// // //         }
// // //         body {
// // //           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
// // //           background-color: #f9f9f9;
// // //           color: #333;
// // //         }
// // //       `}</style>

// // //       <NavBar cart={cart} />
      
// // //       <Routes>
// // //         <Route 
// // //           path="/" 
// // //           element={<Home apiData={apiData} SetApiData={SetApiData} cart={cart} SetCart={SetCart} />} 
// // //         />
        
// // //         <Route 
// // //           path="/about" 
// // //           element={<About />} 
// // //         />
// // //         <Route 
// // //           path="/cart" 
// // //           element={<Cart cart={cart} />} 
// // //         />
// // //       </Routes>
// // //     </div>
// // //   )
// // // }

// // // export default App



// // // import React from 'react'
// // // import ToDoList from './ToDoList'


// // // const App = () => {
// // //   return (
// // //     <div>
// // //       <ToDoList/>
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // import React from 'react'
// // // import useCounter from './useCounter';
// // // import { useMemo } from 'react';

// // // const App = () => {

// // //   let {count,inc,dec,reset} = useCounter(0)
// // //   let total=   useMemo(()=>{
// // //     let res=0
// // //     for(let i=0;i<1000000000;i++){
// // //       res+=i;
// // //     }
// // //     return res
// // //   },[])
// // //   return (
// // //     <div>
// // //         <h3>{count}</h3>
// // //         <h4>{total}</h4>
// // //         <button onClick={inc}>++</button>
// // //         <button onClick={dec}>--</button>
// // //         <button onClick={reset}>reset</button>
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // import React, { useState } from 'react'

// // // const App = () => {
// // //   let [count,SetCount]= useState(0)
// // //   return (
// // //     <div>
// // //       <h2>{count}</h2>
// // //       <button onClick={()=>SetCount(count+1)}>add</button>
// // //       <Child/>
// // //     </div>
// // //   )
// // // }
// // // const Child = () => {
// // //   console.log("hello");
// // //   return (
// // //     <div>
// // //       hello
// // //     </div>
// // //   )
// // // }

// // // export default App



// // // import React, { memo, useMemo,  useState } from 'react'

// // // const App = () => {
// // //   let [count,SetCount]= useState(0)
// // //   return (
// // //     <div>
// // //       <h2>{count}</h2>
// // //       <button onClick={()=>SetCount(count+1)}>add</button>
// // //       <Child/>
// // //     </div>
// // //   )
// // // }
// // // let Child = memo(function(){
// // //   console.log("hello");

// // //   return(<></>)
// // // })

// // // export default App


// // import React from 'react'
// // import Home from "./Home"
// // // import Navbar from './Navbar'

// // const App = () => {
// //   return (
// //     <div>
// //       <Home/>
// //       {/* <Navbar/> */}
// //     </div>
// //   )
// // }

// // export default App


import React from 'react'
import UserList from "./UserList"
import { Route, Routes } from "react-router-dom"
import UserProfile from "./UserProfile"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList/>}></Route>
         <Route path="/profile/:id" element={<UserProfile/>}></Route>
      </Routes>
    </div>
  )
}

export default App



// import React from 'react'

// const App = () => {
//     Array.prototype.myMap=function(cb){
//         let res=[]
//         for(let i=0;i<this.length;i++){
//             // res.push(cb(this[i],i,this))
//             if(cb(this[i],i,this)){
//                 res.push(this[i])
//             }
//         }
//         return res
//     }

//     let arr=[1,2,3,4,5]
//     let val=arr.myMap(   function(a,b,c){
//         return a>2
//     })
//     console.log(val);
//   return (
//     <div>App</div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//     Array.prototype.myReduce=function(cb,initialData=0){
//         let sum=initialData
//         for(let i=0;i<this.length;i++){
//             sum=cb(sum,this[i])
//         }
//         return sum
//     }

//     let arr=[1,2,3,4,5]
//     let data = arr.reduce((a,b)=>{
//         return a + b
//     },10)
//     console.log(data);
//   return (
//     <div>App</div>
//   )
// }

// export default App