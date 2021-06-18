import React, { useState } from "react";
import Button from "./Button";
import { useBagContext } from "./Context";

export default function Shop() {
   const { bag, setBag } = useBagContext();
   const [centerImage, setCenterImage]: [String, Function] =
      useState("hook-shaving.gif");

   return (
      <div className="container col-sm col-lg-6 py-1 px-5 mt-1 d-flex row justify-content-center mx-auto">
         <div className="row p-1">
            <Button
               name="add to bag"
               link="shop"
               onClick={() => setBag(bag + 1)}
            />
         </div>
         <div className="container d-flex flex-row justify-content-center">
            <div className="col p-1 ">
               <img
                  src={process.env.PUBLIC_URL + "/images/hook-shop-1.jpg"}
                  alt="hook shop 1"
                  className="w-100"
                  onClick={() => setCenterImage("hook-shop-1.jpg")}
               ></img>
            </div>
            <div className="col p-1 ">
               <img
                  src={process.env.PUBLIC_URL + "/images/hook-shop-2.jpg"}
                  alt="hook shop 2"
                  className="w-100"
                  onClick={() => setCenterImage("hook-shop-2.jpg")}
               ></img>
            </div>
         </div>
         <div className="row p-1 text-center">
            <img
               src={process.env.PUBLIC_URL + `/images/${centerImage}`}
               alt="hook shaving gif"
               className="col w-50"
               onClick={() => setCenterImage("hook-shaving.gif")}
            ></img>
         </div>
         <div className="container d-flex flex-row justify-content-center">
            <div className="col p-1">
               <img
                  src={process.env.PUBLIC_URL + "/images/hook-shop-3.jpg"}
                  alt="hook shop 3"
                  className="w-100"
                  onClick={() => setCenterImage("hook-shop-3.jpg")}
               ></img>
            </div>
            <div className="col p-1">
               <img
                  src={process.env.PUBLIC_URL + "/images/hook-shop-4.jpg"}
                  alt="hook shop 4"
                  className="w-100"
                  onClick={() => setCenterImage("hook-shop-4.jpg")}
               ></img>
            </div>
         </div>
         <h2 className="pt-3 text-center">$15</h2>
         <p className="text-center mb-0">
            includes hook razor and two razor cartridges.
         </p>
         <div className="row p-1">
            <Button
               name="add to bag"
               link="shop"
               onClick={() => setBag(bag + 1)}
            />
         </div>
         <div className="row p-1">
            <Button
               name={`bag (${bag})`}
               link="bag"
               onClick={(e: any) => null}
            />
         </div>
      </div>
   );
}
