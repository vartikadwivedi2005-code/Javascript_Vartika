// import React, { useState } from 'react';
// import './ToDoList.css';
// import { useEffect } from 'react';
// const ToDoList = () => {

   
//     const [input, setInput] = useState('');
//     let [index, setIndex] = useState(null);
//     const [todos, setTodos] = useState([]);
//     let data= localStorage.getItem("key")
//     if(data){
//       useEffect(()=>{
//         setTodos(JSON.parse(data))
//       },[])
//     }
    
    

//     function d(id){
//           let updated=todos.filter((a,b)=>{
//             return id!==b
//           })
//           setTodos(updated)
//     }
//     function e(id){
//       setIndex(id)
//       setTodos(todos)
//     }
//     function handleAddorUpdate(){
//       if(input.trim()===""){
//         return
//       }
//       console.log("hello");
//       if(index!==null){
//         let updateData=[...todos]
//         updateData[index]=input
//         setTodos(updateData)
//         setIndex(null)
//         setInput("")
//       }else{
//         setTodos([...todos,input])
//         setInput("")
//       }
//     }

//         useEffect(()=>{
//         localStorage.setItem("key",JSON.stringify(todos))
//      },[todos])

    
// return (
//   <div className="todo-wrapper">
//     <h1>To Do List</h1>
//     <input onChange={(e) => setInput(e.target.value)} />
//     <button onClick={handleAddorUpdate}>{index!==null?"Update":"Add"}</button>
   
    
    
//     {todos.map((a, index) => {
//         return (
//           <div key={index} className="todo-item"> 
//             <h3>{a}</h3>
//             <button onClick={() => d(index)}>Delete</button>
//             <button onClick={() => e(index)}>Edit</button>
//             <input onChange={(e) => setInput(e.target.value)} />
//           </div>
//         )
//     })}
//   </div>
// );
// };

// export default ToDoList;


// // import React from 'react'
// // import { useReducer } from 'react'

// // const ToDoList = () => {
// //   function reducer(count,action){
// //     if(action.type==="INC"){
// //       return count+1
// //     }
// //     else if(action.type==="DEC"){
// //       return count-1
// //     }
// //     else if(action.type==="RESET"){
// //       return 0
// //     }
// //   }
// //    let [count,dispatch] = useReducer(reducer,0)
// //   return (
// //     <div>
// //        <h2>{count}</h2>
// //        <button onClick={()=>dispatch({type:"INC"})}>++</button>
// //        <button onClick={()=>dispatch({type:"DEC"})}>--</button>
// //        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>

// //     </div>
// //   )
// // }

// // export default ToDoList


import React from 'react'
import { useReducer } from 'react'

const ToDoList = () => {
  let initialData={
    input:"",
    todos:[]
  }
  function reducer(state,action){
    if(action.type==="set_input"){
      return {
        ...state,input:action.payload
      }
    }
    else if(action.type==="add_todo"){
      return {
        input:"",
        todos:[...state.todos,state.input]
      }
    }
    else if(action.type==="delete_todo"){
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload)
      }
    }
    else if(action.type==="edit_todo"){
      let updatedTodos = [...state.todos];
      updatedTodos[action.payload] = state.input;
      return {
        ...state,
        todos: updatedTodos,
        input: ""
      }
      
    }
    
    return state
  }
  let [state,dispatch]=  useReducer(reducer,initialData)
  return (
    <div>
      <input onChange={(e)=>dispatch({type:"set_input",payload:e.target.value})}/>
      <button onClick={()=>dispatch({type:"add_todo"})}>Add</button>
      <button onClick={()=>dispatch({type:"delete_todo",payload:0})}>Delete</button>
      <button onClick={()=>dispatch({type:"edit_todo",payload:1})}>Edit</button>
      {state.todos.map((a,index)=>{
        return <h3 key={index}>{a}</h3>
      })}
    </div>
  )
}


export default ToDoList