import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

function Layout() {
   const [wide, setWide] = useState(false);

   useEffect(() => {
      if (window.innerWidth >= 800) setWide(true);
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
            <div className="d-flex flex-row justify-content-center pt-3">
               <Button name="shop" />
               <Button name="about" />
            </div>
         )}
         <h3 className="text-center pt-3">a razor with a hook.</h3>
         <footer>
            <p className="text-center pt-3">patent pending.</p>
         </footer>
      </div>
   );
}

export default Layout;
