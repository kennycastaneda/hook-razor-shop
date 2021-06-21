import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

function Layout() {
   const [wide, setWide] = useState(false);

   useEffect(() => {
      if (window.innerWidth >= 900) setWide(true);
   }, []);

   return (
      <div className="m-auto p-0">
         <div className="h-100">
            <Menu wide={wide} />
         </div>
         <div className="">
            <Routes wide={wide} />
         </div>
         {wide ? null : (
            <div className="container col-sm px-5 mt-3  d-flex row justify-content-center mx-auto">
               <div className="col mx-1">
                  <Button name="shop" link="shop" onClick={() => null} />
               </div>

               <div className="col mx-1">
                  <Button name="about" link="about" onClick={() => null} />
               </div>
            </div>
         )}
         <h3 className="text-center pt-3">get a new handle on your shave.</h3>
         <footer>
            <p className="text-center pt-3">patent pending.</p>
            <p className="text-center pt-3">
               <small>copyright © 2021 kinetic synergies llc</small>
            </p>
         </footer>
      </div>
   );
}

export default Layout;
