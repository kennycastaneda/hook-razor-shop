import React from "react";

export default function FinalOrder() {
   return (
      <div className="container col-sm col-lg-6 py-1 px-5 mt-1 d-flex row justify-content-center mx-auto">
         <section>
            <div className="product">
               <img
                  src="https://i.imgur.com/EHyR2nP.png"
                  alt="The cover of Stubborn Attachments"
               />
               <div className="description">
                  <h3>Hook Razor</h3>
                  <h5>$20.00</h5>
               </div>
            </div>
            <button type="button" id="checkout-button">
               Checkout
            </button>
         </section>
      </div>
   );
}
