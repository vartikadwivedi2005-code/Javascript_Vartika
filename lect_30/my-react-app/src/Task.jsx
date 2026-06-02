// import React, { useEffect, useState } from 'react'

// const Task = () => {
//     let [search, SetSearch] = useState("")
//     let [ApiData, SetApiData] = useState([])

//     console.log(search);

//     async function apiCall() {
//         console.log("api call");
//         if (!search.trim()) {
//             alert("kuch bhi nhi")
//             return;
//         }
//         let res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
//         let data = await res.json()
//         console.log(data);
//         SetApiData(data.products)
//     }

//     useEffect(() => {
//         fetch('https://dummyjson.com/products').then((res) => {
//             return res.json()
//         }).then((data) => {
//             console.log(data);
//             SetApiData(data.products)
//         })
//     }, [])

//     function fun1(){
//         console.log("data sorted");
//         let sortData = [...ApiData].sort((a,b) => a.price - b.price)
//         SetApiData(sortData)
//     }

//     function fun2(){
//         console.log("data sorted");
//         let sortData = [...ApiData].sort((a,b) => b.price - a.price)
//         SetApiData(sortData)
//     }

//     return (
//         <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            
            
//             <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', alignItems: 'center', justifyContent: 'center' }}>
//                 <input 
//                     placeholder="Search products..." 
//                     onChange={(e) => SetSearch(e.target.value)} 
//                     style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '250px' }}
//                 />
//                 <button onClick={apiCall} style={btnStyle}>Search</button>
//                 <button onClick={fun1} style={sortBtnStyle}>Sort: Low to High</button>
//                 <button onClick={fun2} style={sortBtnStyle}>Sort: High to Low</button>
//             </div>
            
            
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
//                 {
//                     ApiData.map((a) => {
//                         return (
//                             <div key={a.id} style={cardStyle}>
                                
//                                 <div style={{ height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderBottom: '1px solid #eee', padding: '10px' }}>
//                                     <img src={a.thumbnail} alt={a.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}/>
//                                 </div>
//                                 <div style={{ padding: '15px' }}>
//                                     <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>{a.title}</h4>
//                                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                         <span style={{ fontSize: '14px', color: '#777' }}>ID: {a.id}</span>
//                                         <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2e7d32' }}>${a.price}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }


// const btnStyle = {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer'
// }

// const sortBtnStyle = {
//     padding: '10px 15px',
//     fontSize: '14px',
//     backgroundColor: '#fff',
//     color: '#333',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     cursor: 'pointer'
// }

// const cardStyle = {
//     backgroundColor: '#fff',
//     border: '1px solid #e0e0e0',
//     borderRadius: '8px',
//     overflow: 'hidden',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between'
// }

// export default Task


import React from 'react'

const Task = () => {
    // console.log("hellooo");
  return (
    <div>Taskkkkk</div>
  )
}

export default Task
