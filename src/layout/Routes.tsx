import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingImage from "./LandingImage";
import Search from "./Search";
import NotFound from "./NotFound";
import Shop from "./Shop";
import About from "./About";

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
         <Route exact={true} path="/search">
            <Search />
         </Route>
         <Route exact={true} path="/shop">
            <Shop />
         </Route>
         <Route exact={true} path="/about">
            <About />
         </Route>
         <Route>
            <NotFound />
         </Route>
      </Switch>
   );
}
export default Routes;
