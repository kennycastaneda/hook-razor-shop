import React from "react";

type Prop = {
   name: String;
};
export default function Button({ name }: Prop) {
   return <button className="btn btn-outline-dark  m-2">{name}</button>;
}
