import React from "react";
import "./Landing.css";
import Button from "./Button";
type Props = {
   wide: Boolean;
};

export default function LandingImage({ wide }: Props) {
   return (
      <div className="hero">
         <img
            className="w-100 fade-in-image mt-3"
            src={
               wide
                  ? process.env.PUBLIC_URL + "/images/landing-wide.jpeg"
                  : process.env.PUBLIC_URL + "/images/landing.jpeg"
            }
            alt="hook razor"
         />
         {wide ? (
            <div className="row hero-buttons">
               <div className="col">
                  <Button name="shop" link="shop" onClick={() => null} />
               </div>

               <div className="col">
                  <Button name="about" link="about" onClick={() => null} />
               </div>
            </div>
         ) : null}
         <div className="hero-text text-center mt-3 px-3">
            <h1 className="display-5 font-italic">your body has curves.</h1>
            <h1 className="display-6">shouldn't your razor?</h1>
         </div>
      </div>
   );
}
