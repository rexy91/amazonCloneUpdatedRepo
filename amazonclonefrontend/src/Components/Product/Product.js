import React from 'react'
import './Product.css'


const Product = ({title, price, rating, image}) =>  {
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
                <button>Add to basket</button>
        </div>
    )
}

export default Product


