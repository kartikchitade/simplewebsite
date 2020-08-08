import React from "react";
import { Link } from "react-router-dom";


const Common = (props) =>{
    return(
      <>
       <section id="header" className="d-flex align-items-center">
          <div className="Container-fluid">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column">
                  <h1> {props.name} <strong className="brand-name">WEBDITOX</strong>
                  </h1>
                  <h2 className="my-3">
                    We Are Team Of Web Developers.
                  </h2>
                  <div className="mt-3">
                    <Link to={props.visit} className="btn-get-started"> 
                    {props.btname}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg header-img">
                    <img src={props.imgsrc} className="img-fluid animated" alt="Common img"/>
                </div>
                </div>
              </div>
            </div>
          </div>
       </section>
      </>
    )
  }
  export default Common;