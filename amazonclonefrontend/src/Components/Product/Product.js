import React from 'react'
import './Product.css'
import {useStateValue} from '../StateProvider'

const Product = ({id,title, price, rating, image}) =>  {
    // dont need the first argument, we are only dispatching. 
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            // item is the payload
            // Dispatching the current product's info to the store.
            item:{
                id,
                title,
                price,
                rating,
                image
            }
        })
    }
    return (
        <div className ='product_card'>
            <div className='product_information'>
                <p>{title}</p>
                <p className='product_price'>
                        <small>$</small>
                        <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                        {
                            
                            Array(rating) // Create array with size according to the rating.
                            .fill() // Fill with empty values
                            .map(()=> (
                                    <p>⭐️</p>
                            ))
                        }
                </div>
            </div>

                <img src={image}></img>
                <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product


