import React from "react"
import Button from "./Button"

export default function Shop(){

    return(
        <div className="container col-sm col-lg-6 py-1 px-5 mt-1 d-flex row justify-content-center mx-auto">
            <Button name="Add To Bag"/>
            <div className = "container d-flex flex-row justify-content-center">
                <div className = "col p-1 ">
                   <img src={process.env.PUBLIC_URL + "/images/hook-shop-1.jpg"} alt="hook shop 1" className="w-100"></img>
                </div>
                <div className = "col p-1 ">
                  <img src={process.env.PUBLIC_URL + "/images/hook-shop-2.jpg"} alt="hook shop 2" className="w-100"></img>
                </div>
            </div>
            <div className = "row p-1 text-center">
                   <img src={process.env.PUBLIC_URL + "/images/hook-shaving.gif"} alt="hook shaving gif"  className = "col w-50"></img>
            </div>
            <div className = "container d-flex flex-row justify-content-center">
                <div className = "col p-1">
                   <img src={process.env.PUBLIC_URL + "/images/hook-shop-3.jpg"} alt="hook shop 3" className="w-100"></img>
                </div>
                <div className = "col p-1">
                    <img src={process.env.PUBLIC_URL + "/images/hook-shop-4.jpg"} alt="hook shop 4" className="w-100"></img>
                </div>
            </div> 
            <h2 className = "pt-3 text-center">$15</h2>
            <p className = "text-center mb-0">includes hook razor and two razor cartridges.</p>
            <div className="row">
                <Button name="Add To Bag"/>
            </div >
            <div className="row">
                <Button name="Ckeckout"/>           
            </div>
        </div>
    )
}