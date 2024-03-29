import React, { createContext } from 'react'
import all_product from '../Asserts/all_product';


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const Contextvalue = { all_product };

    return (
        <ShopContext.Provider value={Contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
