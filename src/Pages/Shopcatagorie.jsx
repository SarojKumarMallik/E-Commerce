import React, { useContext } from 'react'
import './Css/Shopcatagorie.css'
import { ShopContext } from '../Components/Context/ShopContext'
import dropdown_icon from '../Components/Asserts/dropdown_icon.png'
import Item from '../Components/Items/Item'
const Shopcatagorie = (props) => {
    const { all_product } = useContext(ShopContext)
    return (
        <div className='ShopCatagory'>
            <img className='Shopcategory-banner' src={props.banner} alt="" />

            <div className="Shopcatagory-indexsort">
                <p>
                    <span>Showing 1-12</span> Out of 36 Products
                </p>

                <div className="Shopcatatogy-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>


            <div className="Shopcatagory-Products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    } else {
                        return null;
                    }
                })}
            </div>

            <div className="Shopcatagorie-Loadmode">
                Explore More
            </div>
        </div>
    )
}

export default Shopcatagorie
