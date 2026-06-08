import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div className="cart-page">
      
      <style>{`
        .cart-page {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: sans-serif;
        }

        .cart-heading {
          font-size: 1.8rem;
          color: #1a1a1a;
          margin-bottom: 24px;
          border-bottom: 2px solid #e0e0e0;
          padding-bottom: 10px;
        }

        .empty-message {
          color: #666;
          font-size: 1.1rem;
          margin-top: 20px;
        }

        .cart-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: flex-start;
        }

        .product-card {
          height: 240px; 
          width: 171px;
          background-color: snow;
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          transition: transform 0.2s ease;
        }

        .product-card:hover {
          transform: translateY(-4px);
        }

        .img-container {
          height: 110px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .img-container img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }

        .product-card h4 {
          font-size: 0.85rem;
          color: #333;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 4px 0;
        }

        .product-card h6 {
          font-size: 0.95rem;
          color: #000;
          font-weight: bold;
          margin: 0;
        }
      `}</style>

      <h2 className="cart-heading">Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p className="empty-message">Your cart is empty. Go add some items!</p>
      ) : (
        <div className='cart-container'>
          {
            cart.map((a) => {
              return (
                <div className='product-card' key={a.id}>
                  <div className="img-container">
                    <img src={a.thumbnail} alt={a.title} />
                  </div>
                  <h4>{a.title}</h4>
                  <h6>${a.price}</h6>
                  <h3>{a.category}</h3>
                </div>
              )
            })
          }
        </div>
      )}
    </div>
  )
}

export default Cart