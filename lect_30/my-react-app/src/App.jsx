// // import {useState} from 'react'

// // const App = () => {
// //    let [count, setCount] =     useState(0)
// //    function fun1(){
// //     setCount(count+1)
// //    }
// //   return (
// //     <div>
// //       <h3>{count}</h3>
// //       <button onClick={fun1}>click</button>  
// //     </div>
// //   )
// // }

// // export default App



// // // [ User clicks button ] 
// // //           │
// // //           ▼
// // //     Triggers fun1()
// // //           │
// // //           ▼
// // //   setCount(count + 1)
// // //           │
// // //           ▼
// // // React re-renders App component 
// // //           │
// // //           ▼
// // // Screen updates with new count



// // import React, { useState } from 'react'

// // const App = () => {
// //   const [color, setColor] = useState("pink")

// //   function fun1() {
// //     setColor("lightblue")
// //   }

// //   return (
// //     <div style={{ backgroundColor: color, height: "100vh" }}>
// //       <button onClick={fun1}>Change to light blue</button>
// //     </div>
// //   )
// // }

// // export default App



// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>
// //       <Home />
// //     </div>
// //   )
// // }
// // const Home = () => {
// //   return (
// //     <div>Helloo</div>
// //   )
// // }

// // export default App



// // import React from 'react'
// // import Home from './Home'
// // const App = () => {
// //   return (
// //     <div>
// //       <Home/>
// //     </div>
// //   )
// // }

// // export default App



// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>App</div>
// //   )
// // }

// // export default App



// // import React from 'react'
// // // import Home from './Home'

// // import New, { About } from './New'
// // const App = () => {
// //   return (
// //     <div>
// //       <New/>
// //       <About/>
// //     </div>
// //   )
// // }

// // export default App



// // import React from 'react'
// // import Home from './Home'
// // const App = () => {
// //   let data="hellooo"
// //   return (
// //     <div>
// //       <Home a={data}/>
// //     </div>
// //   )
// // }

// // export default App



// // import React from 'react'
// // import Home from './Home'

// // const App = () => {
// //   let data="hellooo"
// //   return (
// //     <div>
// //       <Home a={data}/>
// //     </div>
// //   )
// // }

// // export default App



// // import {useState} from 'react'
// // const App = () => {
// //    let [count, setCount] =     useState(0)
// //    function fun1(){
// //     setCount(count+1)
// //    }
// //    function fun2(){
// //     setCount(count-1)
// //    }
// //    function fun3(){
// //     setCount(0)
// //    }
// //   return (
// //     <div>
// //       <h3>{count}</h3>
// //       <button onClick={fun1}>++</button> 
// //       <button onClick={fun2}>--</button> 
// //       <button onClick={fun3}>reset</button>
// //     </div>
// //   )
// // }

// // // export default App

// // import React from 'react'
// // import { useState } from 'react'
// // import Form from './Form'
// // const App = () => {
// //   let [input, setInput] =    useState("")
// //   let [data, setData] =      useState("")
// //   function fun1(e){
// //     setInput(e.target.value)
// //   }
// //   function done(){
// //     setData(input)
// //     setInput("")
// //   }
// //   return (
// //     <div>
// //       <h2>{data}</h2>
// //       <input type="text" name="input" value={input} onChange={fun1}/>
// //       <button onClick={done}>click</button>
      
// //     </div>
// //   )
// // }

// // export default App


// // import React from 'react'
// // import Form from './Form'

// // const App = () => {
// //   return (
// //     <div>
// //       <Form/>
// //     </div>
// //   )
// // }

// // export default App

// // Use Effect

// // import {useState} from 'react'
// // import { useEffect } from 'react'
// // const App = () => {
// //   let [count, setCount] = useState(0)
// //   useEffect(()=>{
// //     console.log("hello")
// //   }, [])

// //   return (
// //     <div>
// //       <h3>{count}</h3>
// //       <button onClick={()=>setCount(count+1)}>click</button>
// //     </div>
// // //   )
// // // }

// // // export default App


// // // Use Effect city change

// // // import {useState} from 'react'
// // // import { useEffect } from 'react'
// // // const App = () => {
// // //   let [count, setCount] = useState(0)
// // //   let [city, setCity] = useState("Indore")
// // //   useEffect(()=>{
// // //     console.log("hello")
// // //   }, [])

// // //   return (
// // //     <div>
// // //       <h3>{count}</h3>
// // //       <h2>{city}</h2>
// // //       <button onClick={()=>setCount(count+1)}>click</button>
// // //       <button onClick={(e)=>setCity("Bhopal")}>Change</button>
// // //     </div>
// // //   )
// // // }

// // // export default App

// // import {useState} from 'react'
// // import { useEffect } from 'react'

// // fetch("https://dummyjson.com/products").then((res)=>res.json()).then((data)=>{
// //   console.log(data);
// // })
// // const App = () => {
// //   let [count, setCount] = useState(0)
// //   let [city, setCity] = useState("Indore")
// //   useEffect(()=>{
// //     console.log("hello")
// //   }, [])

// //   return (
// // //     <div>
// // //      <h3>{count}</h3> 
// // //       <h2>{city}</h2>
// //       // <button onClick={()=>setCount(count+1)}>click</button>
// // //       <button onClick={(e)=>setCity("Bhopal")}>Change</button>
// // //     </div>
// // //   )
// // // }

// // // export default App

// import { useState, useEffect } from 'react';
// import './App.css';
// const App = () => {
//   let [ApiData, setApiData] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setApiData(data.products);
//       })
//   }, [])

//   return (
//     <div className="products-container">
//       <h2 className="main-title">Explore Our Products</h2>
//       <div className="products-grid">
//         {ApiData.map((a) => {
//           return (
//             <div className="cart-card" key={a.id}>
//               <img src={a.thumbnail} alt={a.title} />
//               <div className="card-body">
//                 <div className="product-id">#{a.id}</div>
//                 <div className="product-title">{a.title}</div>
//                 <div className="product-price">${a.price}</div>
//                 <div className="product-rating">⭐ {a.rating}</div>
//               </div>
//               <button className="add-to-cart-btn">Add to Cart</button>
//             </div>
//           );
//         })}
        
//       </div>
//     </div>
//   );
// };
// export default App


// import React from 'react'
// import Task from './Task'

// const App = () => {
//   return (
//     <div>
//       <Task/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Task from "./Task"
import ContactUs from "./ContactUs"

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route    path="/"   element={<Home/>}/>
        <Route    path="/about"   element={<About/>}/>
        <Route    path="/task"   element={<Task/>}/>
        <Route    path="/contact"   element={<ContactUs/>}/>
      </Routes>
    </div>
  )
}

export default App