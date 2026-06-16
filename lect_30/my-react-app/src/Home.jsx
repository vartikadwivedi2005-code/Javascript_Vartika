// // // import React from 'react'

// // // const Home = ({a}) => {
// // //   console.log(a);
// // //   return (
// // //     <div>{a}</div>
// // //   )
// // // }

// // // // export default Home


// // // // import React from 'react'
// // // // import A from './A'
// // // // import App from './App'

// // // // const Home = ({a}) => {
// // // //   console.log(a);
// // // //   return (
// // // //     <div>
// // // //       <A val={a}/>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default Home




// // // import React from 'react'
// // // import App from './App'
// // // const Home = () => {
// // //   // let data="hellooo"
// // //   return (
// // //     <div>
// // //       <App/>
// // //     </div>
// // //   )
// // // }

// // // export default Home

// // // import React from 'react'

// // // const Home = () => {
// // //     console.log("hellooo");
// // //   return (
// // //     <div>Homeee</div>
// // //   )
// // // }

// // // export default Home

// // import React, { useEffect } from 'react'
// // import './App.css'

// // const Home = ({ apiData, SetApiData, cart, SetCart }) => {

// //   useEffect(() => {
// //     async function apiCall() {
// //       let res = await fetch("https://dummyjson.com/products")
// //       let data = await res.json()
// //       SetApiData(data.products)
// //     }
// //     apiCall()
// //   }, [])

// //   return (
 
// //     <div className='card-container'>
// //       {
// //         apiData && apiData.map((a) => {
// //           return (
            
// //             <div className='product-card' key={a.id}>
// //               <div className="img-container">
// //                 <img src={a.thumbnail} alt={a.title} />
// //               </div>
// //               <h4>{a.title}</h4>
// //               <p className="price">${a.price}</p>
// //               <h3>{a.category}</h3>
// //               <button onClick={() => SetCart([...cart, a])}>Add to Cart</button>
// //             </div>
// //           )
// //         })
// //       }
// //     </div>
// //   )
// // }

// // export default Home


// import React, {  useEffect } from 'react'
// import { useContext } from 'react'
// import C from './Context'


// const Home = () => {
//   let {state,dispatch}=  useContext(C)
//   console.log(state,"stateeeeeee");


//   useEffect(()=>{
//     async function call(){
//       let res= await fetch("https://dummyjson.com/products")
//       let data= await res.json()
//       console.log(data,"he");
//       dispatch({type:"add_Data",payload:data.products})
//     }
//     call()
//   },[])
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
//       {
//         state.apiData.map((a)=>{
//          console.log(a,"aaa");
                
//                 return(<>
//                   <div key={a.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
//                       <img  src={a.thumbnail} style={{ width: '150px', height: '150px', objectFit: 'cover' }}/>
//                       <h4 style={{ margin: '10px 0 5px' }}>{a.title}</h4>
//                       <p style={{ margin: '0 0 10px' }}>${a.price}</p>
                      
//                       {/* --- ADD TO CART BUTTON --- */}
//                       <button 
//                         onClick={() => dispatch({ type: "ADD_TO_CART", payload: a })}
//                         style={{ padding: '8px 12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
//                       >
//                         Add to Cart
//                       </button>
//                   </div>
//                 </>) 
//         })
//       }
//     </div>
//   )
// }

// export default Home

