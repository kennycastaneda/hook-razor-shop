import React from "react";

export default function Subscribe() {
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("submit");
   };
   return (
      <div className="container col-sm col-lg-6 py-1 px-5 mt-1 d-flex flex-column justify-content-center mx-auto">
         <h2 className="mt-3 text-center ">
            subscribe to monthly razor cartridge delivery.
         </h2>
         <form className="mt-3 text-center" onSubmit={handleSubmit}>
            share your email to learn more:
            <div className="container-fluid m-0 p-0 d-flex flex-row justify-content-center">
               <input
                  type="email"
                  className="w-75 mx-0 p-0"
                  placeholder="  enter your email"
               />
               <button type="submit" className="btn btn-dark w-25 mx-0">
                  {">"}
               </button>
            </div>
         </form>
      </div>
   );
}
