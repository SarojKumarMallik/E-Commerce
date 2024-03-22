import React from 'react'
import './Offers.css'
import Exclucsive_image from '../Asserts/exclusive_image.png'
const Offers = () => {
    return (
        <div className='Offers'>
            <div className="Offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For u</h1>
                <p>Only On Best Sellers Produt</p>
                <button >Check now</button>
            </div>
            <div className="Offers-right">
                <img src={Exclucsive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
