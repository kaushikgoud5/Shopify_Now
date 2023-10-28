import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";
const CartItems = () => {
  const { all_product, cartitems, removeFromcart,getTotalCart,getTotalCartItems } = useContext(ShopContext);
  return (
    <div>
        <div className="container my-5">
            {all_product.map((e,index) => {
                if(cartitems[e.id]>0){
                    return (
                        <table class="table table-hover" key={index}>
                        <thead className="table-secondary">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Title </th>
                            <th scope="col">Price</th>
                            <th scope="col">Quatinty</th>
                            <th scope="col">Total</th>
                            <th scope="col">Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"><img style={{width:"60px"}} src={e.image} alt="" /></th>
                            <td>{e.name}</td>
                            <td>${e.new_price}</td>
                            <td>{cartitems[e.id]}</td>
                            <td>${e.new_price*cartitems[e.id]}</td>
                            <td> <button className="border border-1 bg-white" onClick={()=>{removeFromcart(e.id)}}>X</button> </td>
                        </tr>
                        
                        </tbody>
                    </table>
                );
                }

            })}
        
        </div>
        <div class="row g-6 mx-5  p-5">
        <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-success">Your cart</span>
            <span class="badge bg-primary rounded-pill">{getTotalCartItems()}</span>
            </h4>
            <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                <h6 class="my-0">Sub Total</h6>
                </div>
                <span class="text-body-secondary">${getTotalCart()}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                <h6 class="my-0">Shipping Fee</h6>
                </div>
                <span class="text-body-secondary">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
                <div class="text-success">
                <h6 class="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">−$0</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${getTotalCart()+5}</strong>
            </li>
            </ul>

            <form class="card p-2">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Promo code"/>
                <button type="submit" class="btn btn-danger">Redeem</button>
            </div>
            
            </form>
            <div class="input-group my-3 row g-4">
                <button type="submit" class="btn btn-success"><Link to="/checkout" className="text-decoration-none text-light">Go To Payment</Link></button>
            </div>
        </div>
        </div>

    </div>
  );
  
};

export default CartItems;
