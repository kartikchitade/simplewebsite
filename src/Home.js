import React from "react";
import web from "../src/images/web7.png";
import Common from "./common";

const Home = () =>{
    return(
      <>
       <Common
         name="Grow Your Business With"
         imgsrc={web}
         visit="/Service"
         btname="Get Started"
       />
      </>
    )
  }
  export default Home;