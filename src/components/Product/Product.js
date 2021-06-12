import React from 'react';
import './Product.css';
import {useDispatch} from 'react-redux';

function Product({id, title, price, image, category}) {

    const dispatch = useDispatch();

    const addToCart = () =>{
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                category: category
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__category">{category}</p>
            </div>
            <img src={image} alt="ProductImage"/>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
