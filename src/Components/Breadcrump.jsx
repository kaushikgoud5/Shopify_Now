import React from "react";
import { Link } from "react-router-dom";
const Breadcrump = (props) => {
    const {product}=props   
  return (
    <div className="container my-4 mx-5 ">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active ">
            <Link className="text-decoration-none text-dark  fw-semibold" to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active">
            <Link className="text-decoration-none text-dark fw-semibold" to="/">Shop</Link>
          </li>
          <li class="breadcrumb-item active">
            <Link className="text-decoration-none text-dark fw-semibold" to={`/${product.category}`}>{product.category}</Link>
          </li>
          <li class="breadcrumb-item active">
            <Link className="text-decoration-none text-dark fw-semibold" to="">{product.name}</Link>
          </li>
         
        </ol>
    
    </div>
  );
};

export default Breadcrump;
