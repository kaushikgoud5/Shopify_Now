import React from "react";
import { Link } from "react-router-dom";
const LoginSignup = () => {
  return (
    <div className="">
      <div class=" container form-signin w-50 my-5">
        <div className="border border-dark p-3 border-0 rounded-1">
          <form>
            <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
            <div class="form-floating my-2">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Enter your username"
              />
              <label for="floatingInput">Username</label>
            </div>
            <div class="form-floating my-2">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating my-2">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button class="btn btn-danger w-100 py-2" type="submit">
              Sign in
            </button>
            <div class=" my-2 text-body-secondary">Already have an account? <span><Link to="/login" >Login here</Link></span></div>
            <div class="form-check text-start my-3">
              <input
                class="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                By continuing , I agree to the terms and conditions
              </label>
            </div>
            
  
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
