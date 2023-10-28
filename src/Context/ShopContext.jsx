import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product';


export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
         cart[index] = 0;   
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const [cartitems,setCartitems]=useState(getDefaultCart());
  
    const addToCart=(itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // console.log(cartitems);
    }
    const removeFromcart=(itemId)=>{
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCart=()=>{
        let total=0;
        for(const i in cartitems){
            if(cartitems[i]>0){

               
                let info=all_product.find((product)=>product.id===Number(i));
                total+=cartitems[i]*info.new_price;
            }
            
           
        }
        return total;
    }
    const getTotalCartItems=()=>{
        let totalitem=0;
        for(const i in cartitems){
            if(cartitems[i]>0){
                totalitem+=cartitems[i];
            }      
        }
        return totalitem;
    }

    const cvalue={all_product,cartitems,addToCart,removeFromcart,getTotalCart,getTotalCartItems};
    return(
        <ShopContext.Provider value={cvalue}>
                {props.children}
        </ShopContext.Provider>
    )
}
 export default ShopContextProvider;
