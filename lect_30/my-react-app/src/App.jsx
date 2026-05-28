// import {useState} from 'react'

// const App = () => {
//    let [count, setCount] =     useState(0)
//    function fun1(){
//     setCount(count+1)
//    }
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={fun1}>click</button>  
//     </div>
//   )
// }

// export default App



// // [ User clicks button ] 
// //           │
// //           ▼
// //     Triggers fun1()
// //           │
// //           ▼
// //   setCount(count + 1)
// //           │
// //           ▼
// // React re-renders App component 
// //           │
// //           ▼
// // Screen updates with new count



// import React, { useState } from 'react'

// const App = () => {
//   const [color, setColor] = useState("pink")

//   function fun1() {
//     setColor("lightblue")
//   }

//   return (
//     <div style={{ backgroundColor: color, height: "100vh" }}>
//       <button onClick={fun1}>Change to light blue</button>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   )
// }
// const Home = () => {
//   return (
//     <div>Helloo</div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'
// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App



// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App



// import React from 'react'
// // import Home from './Home'

// import New, { About } from './New'
// const App = () => {
//   return (
//     <div>
//       <New/>
//       <About/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'
// const App = () => {
//   let data="hellooo"
//   return (
//     <div>
//       <Home a={data}/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'

// const App = () => {
//   let data="hellooo"
//   return (
//     <div>
//       <Home a={data}/>
//     </div>
//   )
// }

// export default App



// import {useState} from 'react'
// const App = () => {
//    let [count, setCount] =     useState(0)
//    function fun1(){
//     setCount(count+1)
//    }
//    function fun2(){
//     setCount(count-1)
//    }
//    function fun3(){
//     setCount(0)
//    }
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={fun1}>++</button> 
//       <button onClick={fun2}>--</button> 
//       <button onClick={fun3}>reset</button>
//     </div>
//   )
// }

// // export default App

// import React from 'react'
// import { useState } from 'react'
// import Form from './Form'
// const App = () => {
//   let [input, setInput] =    useState("")
//   let [data, setData] =      useState("")
//   function fun1(e){
//     setInput(e.target.value)
//   }
//   function done(){
//     setData(input)
//     setInput("")
//   }
//   return (
//     <div>
//       <h2>{data}</h2>
//       <input type="text" name="input" value={input} onChange={fun1}/>
//       <button onClick={done}>click</button>
      
//     </div>
//   )
// }

// export default App


import React from 'react'
import Form from './Form'

const App = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}

export default App





