// CartItem.jsx
import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Asserts/cart_cross_icon.png';

const CartItem = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='CartItem'>
            <div className="CartItem-Format-Main ">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="CartItem-Format CartItem-Format-Main ">
                                <img className='CartIcon-ProductIcon' src={product.image} alt="" />
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className='CartIcon-Quantity'>{cartItems[product.id]}</button>
                                <p>${product.new_price * cartItems[product.id]}</p>
                                <img className='cartitem-removeicon' src={remove_icon} onClick={() => { removeFromCart(product.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cart-icon-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitem-totalitem">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-totalitem">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-totalitem">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>Processed To Checkout</button>
                    </div>
                </div>
                <div className="cartitem-promocode">
                    <p>If u have a promocode insert here</p>
                    <div className="cartitem-prmomobox">
                        <input type="text" placeholder='Promocode' />
                    </div>
                    <button className='prmomoboxBtn'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
