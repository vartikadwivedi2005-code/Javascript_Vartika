import React, { useState } from 'react';
import './ToDoList.css';
import { useEffect } from 'react';
const ToDoList = () => {

  
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    let data= localStorage.getItem("key")
    if(data){
      useEffect(()=>{
        setTodos(JSON.parse(data))
      },[])
    }
    
    

    function d(id){
          let updated=todos.filter((a,b)=>{
            return id!==b
          })
          setTodos(updated)
    }
    function e(id){
      let edite=todos.map((a,b)=>{
        if(id===b){
          return input;
        }
        return a;
      })
      setTodos(edite)
    }

        useEffect(()=>{
        localStorage.setItem("key",JSON.stringify(todos))
     },[todos])

    
return (
  <div className="todo-wrapper">
    <h1>To Do List</h1>
    <input onChange={(e) => setInput(e.target.value)} />
    <button onClick={() => setTodos([...todos, input])}>Add</button>
    
    {todos.map((a, index) => {
        return (
          <div key={index} className="todo-item"> 
            <h3>{a}</h3>
            <button onClick={() => d(index)}>Delete</button>
            <button onClick={() => e(index)}>Edit</button>
            <input onChange={(e) => setInput(e.target.value)} />
          </div>
        )
    })}
  </div>
);
};

export default ToDoList;