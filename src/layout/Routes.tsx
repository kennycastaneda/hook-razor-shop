import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingImage from "./LandingImage";
import Subscribe from "./Subscribe";
import NotFound from "./NotFound";
import Shop from "./Shop";
import About from "./About";
import Bag from "./Bag";
import FinalOrder from "./FinalOrder";
import Success from "./Success";
import Cancel from "./Cancel";

interface Prop {
   wide: boolean;
}

function Routes({ wide }: Prop) {
   return (
      <Switch>
         <Route exact={true} path="/">
            <div className="p-0">
               <LandingImage wide={wide} />
            </div>
         </Route>
         <Route exact={true} path="/subscribe">
            <Subscribe />
         </Route>
         <Route exact={true} path="/shop">
            <Shop />
         </Route>
         <Route exact={true} path="/about">
            <About />
         </Route>
         <Route exact={true} path="/bag">
            <Bag />
         </Route>
         <Route exact={true} path="/checkout">
            <FinalOrder />
         </Route>
         <Route exact={true} path="/success">
            <Success />
         </Route>
         <Route exact={true} path="/cancel">
            <Cancel />
         </Route>
         <Route>
            <NotFound />
         </Route>
      </Switch>
   );
}
export default Routes;
