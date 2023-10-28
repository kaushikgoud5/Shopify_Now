import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Items from "../Components/Items";
import all_product from "../Components/Assets/all_product";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <div className="shop-category overflow-hidden">
        <img src={props.banner} alt="" />
        <div className="row my-3">
        {all_product.map((item,index)=>{
          if(props.category===item.category){
           return (
            <div className="col-md-3 mb-4">
                 <Items key={item.id}  id={item.id} image={item.image} name={item.name} oldprice={item.old_price} newprice={item.new_price}/>   
              </div>
            

           ) 
              
          }
          
          
        
        })}
          
        </div>
       
      </div>
    </div>
  );
};

export default ShopCategory;
