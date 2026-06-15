import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    let list=['V','A','R','T','I','K','A']
    let navigate = useNavigate()
    function fun1(id){
        navigate(`/profile/${id}`)
    }
  return (
    <div>{list.map((data,id)=>{
        return(<>
        <h2  className='bg-green-300 h-[100px]' key={id}>{data}</h2>
        <button  onClick={()=>fun1(id)}>show</button>
        </>)
    })}
        </div>
  )
}


export default UserList