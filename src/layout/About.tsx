import React, { useState } from "react";
import { createSubscribe } from "../utils/api";
import ErrorAlert from "./ErrorAlert";

export default function Shop() {
   const initialFormState = {
      email: "",
      from_page: "about",
   };
   const [formData, setFormData] = useState({ ...initialFormState });
   const [errors, setErrors] = useState(null);
   const [submit, setSubmit] = useState(false);

   const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      setFormData({
         ...formData,
         [e.currentTarget.name]: e.currentTarget.value,
      });
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
         setErrors(null);
         const abortController = new AbortController();
         await createSubscribe(formData, abortController.signal);
         setSubmit(true);
      } catch (err) {
         setErrors(err);
      }
      setFormData({ ...initialFormState });
   };

   return (
      <div className="container col-sm col-lg-6 py-1 px-5 mt-3 d-flex row justify-content-center mx-auto fade-in-image">
         <div className="container d-flex flex-row mx-5 justify-content-center">
            <div className="col p-1 ">
               <img
                  src={process.env.PUBLIC_URL + "/images/hook-about-2.jpeg"}
                  alt="hook shop 1"
                  className="w-100"
               ></img>
            </div>
            <div className="col p-1 ">
               <img
                  src={process.env.PUBLIC_URL + "/images/hook-about-3.jpeg"}
                  alt="hook shop 2"
                  className="w-100"
               ></img>
            </div>
            <div className="col p-1">
               <img
                  src={process.env.PUBLIC_URL + "/images/hook-about-1.jpeg"}
                  alt="hook shop 3"
                  className="w-100"
               ></img>
            </div>
         </div>

         <h2 className="mt-3 mb-0 text-center">
            designed & made in houston, tx
         </h2>
         <p className="mt-3 text-center mb-0">natural grip variations.</p>
         <p className="text-center mb-0">hang to dry and store.</p>
         <p className="text-center mb-0">improved shaving experience.</p>
         <h4 className="mt-3 text-center mb-0">
            our current design is 3d printed.{" "}
         </h4>
         <div className="d-flex flex-row p-1 mt-3 text-center">
            <img
               src={process.env.PUBLIC_URL + "/images/3dprintgif.gif"}
               alt="hook shaving gif"
               className="col"
            ></img>
         </div>
         <form className="mt-3 px-3 text-center" onSubmit={handleSubmit}>
            share your email for discounts:
            <div className="container-fluid m-0 p-0 d-flex flex-row justify-content-center ">
               <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="w-75 mx-0 px-2 border border-dark "
                  placeholder=" enter your email"
                  onChange={handleChange}
                  maxLength={100}
               />
               <button
                  type="submit"
                  className="btn btn-dark w-25 mx-0 rounded-0 "
               >
                  {">"}
               </button>
            </div>
            <p hidden={!submit}>thank you.</p>
         </form>
         <ErrorAlert error={errors} />

         <div className="row p-1 mt-3 text-center">
            <h4>a hooked handle has more to offer.</h4>
            <img
               src={process.env.PUBLIC_URL + "/images/hook-prototypes.jpeg"}
               alt="hook shaving gif"
               className="col"
            ></img>
         </div>
      </div>
   );
}
