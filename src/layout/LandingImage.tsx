import React from "react";
import "./Landing.css";
import Button from "./Button";
type Props = {
   wide: Boolean;
};

export default function LandingImage({ wide }: Props) {
   return (
      <div className="hero ">
         <img
            className="w-100 fade-in-image faded-border"
            src={
               wide
                  ? process.env.PUBLIC_URL + "/images/landing-wide.jpeg"
                  : process.env.PUBLIC_URL + "/images/landing.jpeg"
            }
            alt="hook razor"
         />
         {wide ? (
            <div className="d-flex flex-row justify-content-around hero-buttons">
               <Button name="shop" />
               <Button name="about" />
            </div>
         ) : null}
      </div>
   );
}
