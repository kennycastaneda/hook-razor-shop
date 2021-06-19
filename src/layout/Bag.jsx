import React from "react"
import {useBagContext} from "./Context"
import { Link } from "react-router-dom";

export default function Bag(){
    const {bag, setBag}=useBagContext();
    return(
        <div className = "container col-sm col-lg-6 py-1 px-5 mt-1 d-flex row justify-content-center mx-auto fade-in-image">
            <div className="row p-1 text-center">
                <img src={process.env.PUBLIC_URL + "/images/hook-bag-1.jpg"} alt="hook bag" className="mt-3 align-self-center"/>
            </div>
            <h2 className = "mt-3 text-center">
                bag checkout
            </h2>
            <p className="mt-3 text-center">hook razor and two razor cartridges per order.</p>
            <h3 className="mt-3 text-center">total orders: {bag}</h3>
            <div className="row w-75 mt-3 justify-content-center mx-auto">
                <button className = "btn btn-outline-dark btn-sm m-1 col-4" onClick={()=> bag===0?null:setBag(bag-1)}>-</button>
                <button className = "btn btn-outline-dark btn-sm m-1 col-4 font-weight-bold" onClick={()=>setBag(bag+1)}>+</button>
            </div>
            <div className="w-100 px-3 mx-auto mt-3" display={bag?"none":"block"}>
                <Link to={bag?"/checkout":"/bag"}>
                <button className="btn btn-dark w-100" disabled={!bag} onClick={()=>null}>checkout ${bag*15}<small>.00</small></button>
                </Link>
            </div>
        </div>
    )
}