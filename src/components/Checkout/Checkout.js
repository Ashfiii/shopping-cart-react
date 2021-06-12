import React from 'react';
import './Checkout.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Checkout() {

    const history = useHistory();
    const cartArrr= useSelector(
        (state) => state.carts.cartData
      );

    // const getCartTotal = (cartArrr)=>{
    // let i;
    // let totalPrice = 0;
    //     for(i=0; i<cartArrr.length; i++){
    //         totalPrice += parseInt(cartArrr[i].price)
    //     }
    // }

     const buttonClass= cartArrr.length===0 ? 'hideButton': '';

    return (
        <div className="checkout">
            <h2 className="checkout__title">Shopping Cart</h2>
            <div className="checkout__total">
                <p>Subtotal ({cartArrr.length} items)</p>
                <button className={buttonClass} onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            </div>
            <div className="checkout__info">
                <div>
                    {cartArrr.length===0 ? <h2 className="checkout__header">No Items in the Cart</h2>: 
                    cartArrr.map(item =>(
                        <CheckoutProduct 
                        key={item.id}
                        title={item.title}
                        price= {item.price}
                        image={item.image}
                    />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Checkout
