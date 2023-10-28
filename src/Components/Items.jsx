import React from "react";

import { Link } from "react-router-dom";
const Items = (props) => {
  const handlemouse=()=>{
    document.getElementById(`${props.id}`).style.transition = 'all .5s';
  document.getElementById(`${props.id}`).style.WebkitTransition = 'all .5s';
  document.getElementById(`${props.id}`).style.opacity = .2;
  }
  const handlemouse1=()=>{
    document.getElementById(`${props.id}`).style.opacity = 1;
  }
  return (
    <div className="container my-3 ">
          <div className="row">
         
                <div className="col-md-3 mb-4" style={{width:"18rem"}}>
                  <div key={props.key} className="card h-100">
                  <Link to={`/product/${props.id}`}>
                      <img
                      id={props.id}
                      onMouseOver={handlemouse}
                      onMouseLeave={handlemouse1}
                        onClick={window.scrollTo(0,0)}
                        src={props.image}
                        className="img-fluid"
                      />
                      </Link>
                    <div className="card-body">
                      <p className="text-center mt-2 text-decoration-none text-dark">
                        {props.name}
                        <br />
                         <span><b></b>{`$ ${props.newprice}`}</span> 
            <span class="text-decoration-line-through"> {` $${props.oldprice} `}</span>
  
                       
                      </p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
  );
};

export default Items;
