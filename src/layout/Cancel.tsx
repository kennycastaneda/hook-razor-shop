import React from "react";
import Shop from "./Shop";

export default function Cancel() {
   return (
      <div className="container col-sm col-lg-6 py-1 px-5 mt-1 d-flex row justify-content-center mx-auto fade-in-image">
         <p className="text-center mt-3">
            forgot to add something to your bag? take another look around, then
            come back to pay.
         </p>
         <Shop />
      </div>
   );
}
