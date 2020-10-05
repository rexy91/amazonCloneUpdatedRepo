import React from 'react'
import './LandingPage.css'
import LandingImage from '../../Components/landing_image.jpg' 
export default function LandingPage() {
    return (
        <div className='landing_page'>
                <img className='landing_image' src={LandingImage}></img>
        </div>
    )
}
