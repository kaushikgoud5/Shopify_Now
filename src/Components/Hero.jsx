import React from "react";
import him from "./Assets/him.png";
import outfit from "./Assets/outfit.png";
import her from "./Assets/her.png";

const Hero = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Designed specially for you{" "}
            </h1>
            <p className="lead my-3 display-5">
              Classic and sophisticated pieces that never go out of style.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"></div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={him} alt="" width="500" />
          </div>
        </div>
      </div>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Festival Frenzy Finds</h2>
            <p className="lead">Vibrant and fun pieces for festival-goers.</p>
          </div>
          <div className="bg-body-tertiary shadow-sm mx-auto"></div>
          <img src={outfit} alt="" />
        </div>
        <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Casual Comfort Corner</h2>
            <p className="lead"> Relaxed and cozy everyday wear.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto"></div>
          <img src={her} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
