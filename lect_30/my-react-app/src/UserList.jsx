import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserList = () => {
    let list=['A','B','C','D']
 let navigate=   useNavigate()
    function fun1(id){
        // console.log(id);
        navigate(`/profile/${id}`)

    }
   
  return (
    <div>{list.map((data,id)=>{
        return(<>
        <h2  className='bg-green-900' key={id}>{data}</h2>
        <button  onClick={()=>fun1(id)}>show</button>
        </>)
    })}
        </div>
  )
}

export default UserList