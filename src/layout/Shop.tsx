import React, { useState } from "react";
import Button from "./Button";
import { useBagContext } from "./Context";

export default function Shop() {
   const { bag, setBag, whiteBag, blackBag, setWhiteBag, setBlackBag } =
      useBagContext();
   const [isWhite, setIsWhite]: [String, Function] = useState("");
   const [centerImage, setCenterImage]: [String, Function] = useState(
      "/images/hook-shaving.gif"
   );

   return (
      <div className="container col-sm col-lg-6 py-1 px-5 mt-3 d-flex row justify-content-center mx-auto fade-in-image">
         <div className="container d-flex flex-row justify-content-center">
            <div className="col p-1 ">
               <img
                  src={
                     process.env.PUBLIC_URL +
                     `/images/hook-shop-1${isWhite}.jpg`
                  }
                  alt="hook shop 1"
                  className="w-100"
                  onClick={() =>
                     setCenterImage(`/images/hook-shop-1${isWhite}.jpg`)
                  }
               ></img>
            </div>
            <div className="col p-1 ">
               <img
                  src={
                     process.env.PUBLIC_URL +
                     `/images/hook-shop-2${isWhite}.jpg`
                  }
                  alt="hook shop 2"
                  className="w-100"
                  onClick={() =>
                     setCenterImage(`/images/hook-shop-2${isWhite}.jpg`)
                  }
               ></img>
            </div>
         </div>
         <div className="row p-1 text-center">
            <img
               src={process.env.PUBLIC_URL + `${centerImage}`}
               alt="hook shaving gif"
               className="col w-50"
               onClick={() => setCenterImage("/images/hook-shaving.gif")}
            ></img>
         </div>
         <div className="container d-flex flex-row justify-content-center">
            <div className="col p-1">
               <img
                  src={
                     process.env.PUBLIC_URL +
                     `/images/hook-shop-3${isWhite}.jpg`
                  }
                  alt="hook shop 3"
                  className="w-100"
                  onClick={() =>
                     setCenterImage(`/images/hook-shop-3${isWhite}.jpg`)
                  }
               ></img>
            </div>
            <div className="col p-1">
               <img
                  src={
                     process.env.PUBLIC_URL +
                     `/images/hook-shop-4${isWhite}.jpg`
                  }
                  alt="hook shop 4"
                  className="w-100"
                  onClick={() =>
                     setCenterImage(`/images/hook-shop-4${isWhite}.jpg`)
                  }
               ></img>
            </div>
         </div>
         <div className="row p-1 mt-3 mx-auto justify-content-center">
            <button
               className={
                  "btn w-50" + (isWhite === "" ? " btn-dark" : " btn-light")
               }
               onClick={() =>
                  isWhite === "" ? setIsWhite("-white") : setIsWhite("")
               }
            >
               {isWhite === "" ? "black" : "white"}
            </button>
         </div>
         <h2 className="pt-3 text-center">
            $15<small>.00</small>
         </h2>
         <p className="text-center mb-0">
            includes hook razor and two razor cartridges.
         </p>
         <p className="text-center mb-0">
            free shipping. free returns. zero tax.
         </p>
         <div className="row p-1">
            <Button
               name={`add ${isWhite === "" ? "black" : "white"} hook to bag`}
               link="shop"
               onClick={() => {
                  setBag(bag + 1);
                  isWhite === ""
                     ? setBlackBag(blackBag + 1)
                     : setWhiteBag(whiteBag + 1);
               }}
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
