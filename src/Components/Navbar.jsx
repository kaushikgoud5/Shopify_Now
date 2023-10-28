import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { ShopContext } from "../Context/ShopContext";
const Navbar = () => {
  const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex" id="navbarSupportedContent">
          <Link className="fw-bold navbar-brand col-lg3 me-0" to="/">
            ShopifyNow
          </Link>
            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
              <li className="nav-item">
                <Link className="fw-medium nav-link active  text-decoration-none" aria-current="page" to="/">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="fw-medium nav-link active text-decoration-none" aria-current="page" to="/men">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link className="fw-medium nav-link active text-decoration-none" to="/women">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link className="fw-medium nav-link active text-decoration-none" to="/kids">Kids</Link>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-5 justify-content-lg-end">
              <button className="btn " type="submit" >
                <Link  className="fw-medium text-decoration-none " to="/login">Login</Link>
              </button>
              <button className="btn btn-outline-success mx-4 position-relative" type="submit">
                
                <Link className="fw-medium text-decoration-none" to="/cart">Cart🛒</Link>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {getTotalCartItems()}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
