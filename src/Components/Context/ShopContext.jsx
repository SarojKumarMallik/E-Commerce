import React, { createContext, useState } from "react";
import all_product from '../Asserts/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                TotalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return TotalAmount; // Move return statement outside the loop
    }

    const getTotalCartItems = () => {
        let TotalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                TotalItem += cartItems[item]
            }
        }
        return TotalItem;
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
