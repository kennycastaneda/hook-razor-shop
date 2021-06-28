import React, { useState } from "react";
import ErrorAlert from "./ErrorAlert";
import { createCartridge, createSubscribe } from "../utils/api";

export default function Subscribe() {
   const initialFormState = {
      email: "",
      from_page: "subscribe",
   };
   const [formData, setFormData] = useState({ ...initialFormState });
   const [errors, setErrors] = useState(null);
   const [redirect, setRedirect] = useState(false);

   const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      setFormData({
         ...formData,
         [e.currentTarget.name]: e.currentTarget.value,
      });
   };

   const handleSubscribe = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      try {
         setRedirect(true);
         await createCartridge({
            quantity: 1,
         });
      } catch (err) {
         setErrors(err);
      }
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
         const abortController = new AbortController();
         await createSubscribe(formData, abortController.signal);
      } catch (err) {
         setErrors(err);
      }
      setFormData({ ...initialFormState });
   };

   return (
      <div className="container col-sm col-lg-6 py-1 px-5 mt-3 d-flex flex-column justify-content-center mx-auto fade-in-image">
         <h2 className="text-center mb-0">
            subscribe to monthly razor delivery.
         </h2>
         <h3 className="text-center mt-3 mb-0">get two 5-blade cartridges.</h3>
         <h2 className="text-center mt-3 mb-0">
            $4
            <small>.50 </small>per month.
         </h2>
         <div className="w-100 px-3 mx-auto mt-3 pt-3">
            <h3 className="text-center blink" hidden={!redirect}>
               ...redirecting to stripe checkout
            </h3>
            <button className="btn btn-dark w-100" onClick={handleSubscribe}>
               subscribe
            </button>
         </div>
         <div className="mt-3 pt-3 text-center">
            <img
               src={process.env.PUBLIC_URL + "/images/cartridges.jpg"}
               alt="hook shaving gif"
               className="col"
            />
         </div>
         <div className="w-100 px-3 mx-auto mt-3 pt-3">
            <h3 className="text-center blink" hidden={!redirect}>
               ...redirecting to stripe checkout
            </h3>
            <button
               className="btn btn-outline-dark w-100"
               onClick={handleSubscribe}
            >
               subscribe $4
               <small>.50/month</small>
            </button>
         </div>

         <form className="mt-3 text-center" onSubmit={handleSubmit}>
            share your email to learn more:
            <div className="container-fluid m-0 px-3 d-flex flex-row justify-content-center">
               <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="w-75 mx-0 px-2 border border-dark rounded-0"
                  placeholder=" enter your email"
                  onChange={handleChange}
                  maxLength={100}
               />

               <button
                  type="submit"
                  className="btn btn-dark w-25 mx-0 rounded-0"
               >
                  {">"}
               </button>
            </div>
         </form>
         <ErrorAlert error={errors} />
      </div>
   );
}
