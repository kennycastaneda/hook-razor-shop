import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
type Props = {
   wide: Boolean;
};
function Menu({ wide }: Props) {
   return (
      <nav className="navbar navbar-light p-0">
         <div className="container-fluid d-flex flex-row p-0 ">
            {wide ? (
               <ul className="nav navbar-nav col d-flex flex-row text-light justify-content-start">
                  <li className="nav-item pl-5 mr-1">
                     <Link className="nav-link pl-1" to="/shop">
                        <span className="" />
                        shop
                     </Link>
                  </li>
                  <li className="nav-item ml-3">
                     <Link className="nav-link" to="/about">
                        <span className="" />
                        about
                     </Link>
                  </li>
               </ul>
            ) : null}
            <Link className="navbar-brand col text-center m-0 pt-2 pb-0" to="/">
               <div className="text-black h1 mx-auto my-0 ">
                  <span>hook razor</span>
               </div>
            </Link>
            {wide ? (
               <ul className="nav navbar-nav col d-flex flex-row text-light justify-content-end p-0">
                  <li className="nav-item mr-3">
                     <Link className="nav-link" to="/cart">
                        <span className="" />
                        cart
                     </Link>
                  </li>
                  <li className="nav-item pr-5">
                     <Link className="nav-link " to="/search">
                        <span className="" />
                        search
                     </Link>
                  </li>
               </ul>
            ) : (
               <ul className="nav navbar-nav d-flex flex-row text-light justify-content-center p-0 mx-auto">
                  <li className="nav-item col  ">
                     <Link className="nav-link py-0" to="/shop">
                        <span className="" />
                        shop
                     </Link>
                  </li>
                  <li className="nav-item col">
                     <Link className="nav-link py-0" to="/about">
                        <span className="" />
                        about
                     </Link>
                  </li>
                  <li className="nav-item col  ">
                     <Link className="nav-link py-0" to="/bag">
                        <span className="" />
                        bag
                     </Link>
                  </li>
                  <li className="nav-item col  ">
                     <Link className="nav-link py-0" to="/search">
                        <span className="" />
                        search
                     </Link>
                  </li>
               </ul>
            )}
         </div>
      </nav>
   );
}
export default Menu;
