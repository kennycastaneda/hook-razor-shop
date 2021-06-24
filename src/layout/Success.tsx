import React from "react";

export default function Success() {
   return (
      <div className="container col-sm col-lg-6 py-1 px-5 mt-1 d-flex row justify-content-center mx-auto fade-in-image">
         <h1 className="text-center mt-3">we appreciate your business!</h1>
         <p className="text-center mt-3">
            keep an eye out for an email with package tracking information.
         </p>
         <img
            src={process.env.PUBLIC_URL + "/images/hook-shop-2.jpg"}
            alt="successful order hook"
            className="w-100"
         />
         <p className="text-center mt-3">
            if you have any questions, please email{" "}
            <a href="mailto:kenny@kineticsynergies.com">
               kenny@kineticsynergies.com
            </a>
         </p>
      </div>
   );
}
