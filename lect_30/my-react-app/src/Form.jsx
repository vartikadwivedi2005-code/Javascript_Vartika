import React, { useState } from 'react' 
import './App.css'

const Form = () => {

  let [input, setInput] = useState({
    name:"",
    email:"",
    password:""
  })      
  

  function fun1(e){
    // setName(e.target.value)
    console.log(e.target);
    let {name,value}=e.target
    setInput({...input,[name]:value})
    console.log(input);
  }

 


  return (
    <div>
        <h1>Form</h1>
        <form>
            <input type="text" placeholder='name' name='name' value={input.name} onChange={fun1}/>
            <br></br>
            <br></br>

            <input type="email" placeholder='email' name='email' value={input.email} onChange={fun1} />
            <br></br>
            <br></br>

          
            <input type="password" placeholder='password' name='password' value={input.password} onChange={fun1}/>
            <br></br>
            <br></br>

            <button onClick={fun1}>submit</button>
        </form>
    </div>
  )
}

export default Form