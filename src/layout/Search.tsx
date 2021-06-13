import React from "react";

export default function Search() {
   return (
      <form className="text-center">
         <input type="text" className="input" placeholder="Search"></input>
         <button type="submit" className="btn btn-dark">
            Search
         </button>
      </form>
   );
}
