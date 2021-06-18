import React from "react";
import { Link } from "react-router-dom";
type Prop = {
   name: String;
   onClick: Function;
   link: String;
};
export default function Button({ name, link, onClick }: Prop) {
   return (
      <Link to={`/${link}`}>
         <button
            className="btn btn-outline-dark w-100 mx-auto my-1"
            onClick={(e: React.MouseEvent<HTMLElement>) => onClick(e)}
         >
            {name}
         </button>
      </Link>
   );
}
