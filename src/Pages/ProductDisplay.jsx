import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const zoomIn=(element)=>{
    document.querySelector('img').style.transition = 'all .5s';
    document.querySelector('img').style.WebkitTransition = 'all .5s';
    document.querySelector('img').style.transform = 'scale(1.2)'; 
  }
  const zoomOut=(element)=>{
    document.querySelector('img').style.transform = 'scale(1)'; 
  }
  const { product } = props;
  const {addToCart}=useContext(ShopContext);
  return (
    <div>
      <div className="d-md-flex flex-md-equal my-md-5 ps-md-3 mx-5 overflow-hidden">
        <div className="bg-body me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <img onMouseOver={zoomIn}  onMouseOut={zoomOut}src={product.image} alt="" />
        </div>
        <div className="container">
          <h3 className="text-secondary">{product.name}</h3>
          <div className="my-3">⭐⭐⭐⭐⭐ 72 Ratings</div>
          <div className="mt-4 ">
            <span className="text-danger fs-3">
              <b>${product.new_price}</b>
            </span>
            <span class="text-decoration-line-through mx-2 fs-4">
              ${product.old_price}
            </span>
          </div>
          <div className="my-4">
            <p>
              The Men's Green Solid Zippered Full-Zip Slim Fit Bomber Jacket is
              a stylish and versatile outerwear piece.
            </p>
          </div>
          <div className="mx-2 text-secondary fs-6 fw-medium">Select Size</div>
          <div
            class="btn-group my-3"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <div className="mx-2">
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
              />
              <label class="btn btn-outline-dark" for="btnradio1">
                S
              </label>
            </div>
            <div className="mx-2">
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              />
              <label class="btn btn-outline-dark" for="btnradio2">
                M
              </label>
            </div>
            <div className="mx-2">
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
              />
              <label class="btn btn-outline-dark" for="btnradio3">
                L
              </label>
            </div>
            <div className="mx-2">
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio4"
                autocomplete="off"
              />
              <label class="btn btn-outline-dark" for="btnradio4">
                XL
              </label>
            </div>
            <div className="mx-2">
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio5"
                autocomplete="off"
              />
              <label class="btn btn-outline-dark" for="btnradio5">
                XXL
              </label>
            </div>
          </div>
          <div className="row">
            <div class="d-grid col-5">
              <button class="btn  btn-outline-danger" type="button" onClick={()=>{addToCart(product.id)}}>
                ADD TO CART🛒
              </button>
            </div>
            <div className="d-grid col-3">
              <button class="btn  btn-outline-success" type="button">
                Wishlist💓
              </button>
            </div>
          </div>
          <hr />
          <div>
            <span className="fs-6 fw-medium">DELIVERY OPTIONS🚛</span>
            <div class="input-group mb-1 w-25 my-3">
              <input
                type="text"
                class="form-control"
                placeholder="Pincode"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button class="input-group-text text-danger" id="basic-addon2">
                Checkout
              </button>
            </div>
            <p className="text-secondary fw-light">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>

            <hr />

              

          </div>
        </div>    
      </div>
        
    </div>
  );
};

export default ProductDisplay;
