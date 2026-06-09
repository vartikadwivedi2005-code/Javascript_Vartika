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


// import React, { useReducer } from 'react';

// const initialData = {
//     input: "",
//     todos: [],
//     index: null
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case "SET_INP":
//             return {
//                 ...state,
//                 input: action.payload
//             };
//         case "ADD_TODO":
//             return {
//                 ...state, 
//                 todos: [...state.todos, state.input],
//                 input: ""
//             };
//         case "DELET_TODO":
//             return {
//                 ...state,
//                 todos: state.todos.filter((_, id) => id !== action.payload)
//             };
//         case "EDIT_TODO":
//             return {
//                 ...state,
//                 input: state.todos[action.payload],
//                 index: action.payload
//             };
//         case "UPDATE_TODO": {
//             const updatedTodos = [...state.todos];
//             updatedTodos[state.index] = state.input;
//             return {
//                 ...state,
//                 todos: updatedTodos,
//                 input: "",
//                 index: null
//             };
//         }
//         default:
//             return state;
//     }
// }

// const Todo = () => { 
//     const [state, dispatch] = useReducer(reducer, initialData);

//     function handleSubmit() {
//         if (state.input.trim() === "") return; 
        
//         if (state.index !== null) {
//             dispatch({ type: "UPDATE_TODO" });
//         } else {
//             dispatch({ type: "ADD_TODO" });
//         }
//     }

//     return (
//         <div>        
//             <input  
//                 name='input'  
//                 value={state.input}  
//                 onChange={(e) => dispatch({ type: "SET_INP", payload: e.target.value })}
//             />
//             <button onClick={handleSubmit}>
//                 {state.index !== null ? "Update" : "Add"}
//             </button>
            
//             {state.todos.map((todo, idx) => {
               
//                 return (
//                     <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                         <h4>{todo}</h4>
//                         <button onClick={() => dispatch({ type: "DELET_TODO", payload: idx })}>Delete</button>
//                         <button onClick={() => dispatch({ type: "EDIT_TODO", payload: idx })}>Edit</button>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default Todo;


















import React,{useReducer}from 'react'
import './ToDoList.css';

const initialData = {
    input: "",
    todos: [],
    index: null
};

function reducer(state,action){
    switch (action.type) {
        case "SET_INP":
            return {
                ...state,
                input: action.payload
            };
        case "ADD_TODO":
            return {
                ...state, 
                todos: [...state.todos, state.input],
                input: ""
            };
        case "DELETE_TODO":
             return {
                ...state,
                todos: state.todos.filter((_, id) => id !== action.payload)
            };
        case "EDIT_TODO":
          return {
                ...state,
                input: state.todos[action.payload],
                index: action.payload
            };
         case "UPDATE_TODO": {
            const updatedTodos = [...state.todos];
            updatedTodos[state.index] = state.input;
            return {
                ...state,
                todos: updatedTodos,
                input: "",
                index: null
            };
        }
        default:
            return state;
    }
        

}
const ToDoList = () => {
     const [state, dispatch] = useReducer(reducer, initialData);

    function handleSubmit() {
        if (state.input.trim() === "") return; 
        
        if (state.index !== null) {
            dispatch({ type: "UPDATE_TODO" });
        } else {
            dispatch({ type: "ADD_TODO" });
        }
    }



return (
    <div className="todo-container">
        <div className="input-group">
            <input  
                className="todo-input"
                name='input'  
                placeholder="Add a new task..."
                value={state.input}  
                onChange={(e) => dispatch({ type: "SET_INP", payload: e.target.value })}
            />
            <button className="btn-primary" onClick={handleSubmit}>
                {state.index !== null ? "Update" : "Add"}
            </button>
        </div>
        
        {state.todos.map((todo, idx) => {
            return (
                <div key={idx} className="todo-item">
                    <h4 className="todo-text">{todo}</h4>
                    <button className="btn-edit" onClick={() => dispatch({ type: "EDIT_TODO", payload: idx })}>Edit</button>
                    <button className="btn-delete" onClick={() => dispatch({ type: "DELETE_TODO", payload: idx })}>Delete</button>
                </div>
            );
        })}
    </div> 
);
}

export default ToDoList
