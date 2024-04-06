import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from './Asserts/logo.png';
import cart_icon from './Asserts/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from './Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("Shop") }}> <Link style={{ textDecoration: 'none' }} to='/'  >Shop</Link>   {menu === "Shop" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'  >Men</Link> {menu === "mens" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'  >Women</Link> {menu === "womens" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("kids") }}> <Link style={{ textDecoration: 'none' }} to='/kids'  >Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>

            <div className="cart-icon-pg">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" className='cart-icon-img' /></Link>
                {/* Replace hardcoded cart count with dynamic value */}
                <div className="cart-icon-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
