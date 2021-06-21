import React, { useState } from "react";
import ErrorAlert from "./ErrorAlert";
import { createSubscribe } from "../utils/api";

export default function Subscribe() {
   const initialFormState = {
      email: "",
      from_page: "subscribe",
   };
   const [formData, setFormData] = useState({ ...initialFormState });
   const [errors, setErrors] = useState(null);

   const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      setFormData({
         ...formData,
         [e.currentTarget.name]: e.currentTarget.value,
      });
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
      <div className="container col-sm col-lg-6 py-1 px-5 mt-1 d-flex flex-column justify-content-center mx-auto fade-in-image">
         <h2 className="mt-3 text-center ">
            subscribe to monthly razor cartridge delivery.
         </h2>
         <form className="mt-3 text-center" onSubmit={handleSubmit}>
            share your email to learn more:
            <div className="container-fluid m-0 px-3 d-flex flex-row justify-content-center">
               <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="w-75 mx-0 px-2"
                  placeholder=" enter your email"
                  onChange={handleChange}
                  maxLength={100}
               />
               <button type="submit" className="btn btn-dark w-25 mx-0">
                  {">"}
               </button>
            </div>
         </form>
         <ErrorAlert error={errors} />
      </div>
   );
}
