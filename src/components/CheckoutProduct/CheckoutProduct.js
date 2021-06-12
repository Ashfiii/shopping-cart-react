import React from 'react';
import './CheckoutProduct.css';
import { useDispatch } from 'react-redux';

function CheckoutProduct({id, image, title, price}) {

     const dispatch = useDispatch()

    const removeFromCart = ()=>{
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="CheckoutImage" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                    </p>
                <button onClick={removeFromCart}>Remove</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
