import React from "react";

type Prop = {
   name: String;
};
export default function Button({ name }: Prop) {
   return (
      <button className="btn btn-pill btn-outline-dark mx-3 my-1 col">
         {name}
      </button>
   );
}
