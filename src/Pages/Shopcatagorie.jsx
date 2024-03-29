import React, { useContext } from 'react'
import '../Pages/Css/Shopcatagorie.css'
import { ShopContext } from '../Components/Context/ShopContext'
import drrodown_icon from '../Components/Asserts/dropdown_icon.png'
import Item from '../Components/Items/Item'

const Shopcatagorie = (props) => {

    const { all_product } = useContext(ShopContext)
    return (
        <div className='Shopcatagorie'>
            <img src={props.banner} alt="man_banner" />
            <div className="Shopcatagoie-indexsort">
                <p>
                    <span>Showing 1-12</span> Out of  36 Products
                </p>

                <div className="Shopcatagorie-sort">
                    Sort by <img src={drrodown_icon} alt="" />
                </div>

                <div className="Shopcatagorie-products">
                    {all_product.map((item, i) => {
                        if (props.catagorie === item.catagory) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Shopcatagorie
