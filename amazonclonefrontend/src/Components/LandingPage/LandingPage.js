import React from 'react'
import './LandingPage.css'
import LandingImage from '../../Components/landing_image.jpg'
import Product from '../Product/Product' 

export default function LandingPage() {
    return (
        <div className='landing_page'>

                <img className='landing_image' src={LandingImage}></img>

                <Product 
                id='1234567'
                title='off-white Sneaker, blalbasdjgkjb klgjasdlfj kfjsadlkfj sdakljflk '
                price={499}
                rating={5}
                image='https://img.zolaprod.babsta.net/pzY8KTdkSQqtY06iq9jqBkvemzk=/fit-in/850x850/0d0dd09f337547879ff7d6a3a1539094'
                />
        </div>


    )
}
