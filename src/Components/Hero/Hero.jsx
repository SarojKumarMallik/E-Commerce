import React from 'react'
import handicon from '../Asserts/hand_icon.png'
import arrow_icon from '../Asserts/arrow.png'
import hero_image from '../Asserts/hero_image.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className="Hero-left">
                <h2> New Arrival Only</h2>
                <div>
                    <div className="hand-icon">
                        <p>New</p>
                        <img src={handicon} alt="" />
                    </div>
                    <p>Collection</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Try Latest Collection</div>
                    <img src={arrow_icon} alt="" />

                </div>
            </div>
            <div className="Hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero
