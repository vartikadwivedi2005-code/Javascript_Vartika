// import React from 'react'

// const Home = ({a}) => {
//   console.log(a);
//   return (
//     <div>{a}</div>
//   )
// }

// // export default Home


// // import React from 'react'
// // import A from './A'
// // import App from './App'

// // const Home = ({a}) => {
// //   console.log(a);
// //   return (
// //     <div>
// //       <A val={a}/>
// // //     </div>
// // //   )
// // // }

// // // export default Home




// import React from 'react'
// import App from './App'
// const Home = () => {
//   // let data="hellooo"
//   return (
//     <div>
//       <App/>
//     </div>
//   )
// }

// export default Home

// import React from 'react'

// const Home = () => {
//     console.log("hellooo");
//   return (
//     <div>Homeee</div>
//   )
// }

// export default Home

import React, { useEffect } from 'react'
import './App.css'

const Home = ({ apiData, SetApiData, cart, SetCart }) => {

  useEffect(() => {
    async function apiCall() {
      let res = await fetch("https://dummyjson.com/products")
      let data = await res.json()
      SetApiData(data.products)
    }
    apiCall()
  }, [])

  return (
 
    <div className='card-container'>
      {
        apiData && apiData.map((a) => {
          return (
            
            <div className='product-card' key={a.id}>
              <div className="img-container">
                <img src={a.thumbnail} alt={a.title} />
              </div>
              <h4>{a.title}</h4>
              <p className="price">${a.price}</p>
              <h3>{a.category}</h3>
              <button onClick={() => SetCart([...cart, a])}>Add to Cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
