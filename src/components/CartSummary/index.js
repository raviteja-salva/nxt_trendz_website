import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const getTotalSum = () => {
        let sum = 0

        cartList.map(item => {
          const {quantity, price} = item
          sum += quantity * price
          return null
        })

        return sum
      }

      return (
        <div className="cart-summary-card">
          <h1 className="order-total">
            <span className="order-total-para">Order Total: </span>Rs{' '}
            {getTotalSum()}
          </h1>
          <p className="order-total-para">{cartList.length} items in cart</p>
          <button className="checkout-btn">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
