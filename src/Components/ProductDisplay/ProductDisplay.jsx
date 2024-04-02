import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Asserts/star_icon.png'
import star_dull_icon from '../Asserts/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;

    const { addToCart } = useContext(ShopContext);
    return (
        <div className='ProductDisplay'>
            <div className="ProductDisplay-left">
                <div className="ProductDispplay-Img-List">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>

                <div className="ProductDisplay-Img">
                    <img className='ProductDisplay-Main-Img' src={product.image} alt="" />
                </div>
            </div>

            <div className="ProductDisplay-Right">
                <h1>{product.name}</h1>
                <div className="ProductDisplay-Right-Stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="ProductDisplay-right-price">
                    <div className="ProductDisplay-right-old-price">
                        ${product.old_price}
                    </div>
                    <div className="ProductDisplay-right-new-price">
                        ${product.new_price}
                    </div>
                </div>

                <div className="Product-right-discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus earum numquam enim iusto facere nesciunt dolorum pariatur animi laudantium in laborum commodi architecto rerum, nostrum doloremque. Voluptates aliquam harum ratione?
                </div>

                <div className="ProductDisplay-right-size">
                    <h1>Select Size</h1>
                </div>

                <div className="ProductDisplay-right-Sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='ProductDisplay-right-Catagory'><span>Category : </span>Women , T-Shirt , Crop-Top</p>
                <p className='ProductDisplay-right-Catagory'><span>Tags : </span>Modern , Latest</p>
            </div>

        </div>
    )
}

export default ProductDisplay
