import React from "react";


export default function NotFound() {
   return (
      <div className="NotFound container-fluid mt-5">
         <h1 className ="text-center">Page Not Found</h1>
         <img src={process.env.PUBLIC_URL + "/images/banner_hook.JPEG"} alt="page not found hook" className="w-100"/>
      </div>
   );
}

