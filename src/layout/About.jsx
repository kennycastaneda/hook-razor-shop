import React from "react"
import Button from "./Button"

export default function Shop(){

    return(
        <div className="container col-sm col-lg-6 py-1 px-5 mt-1 d-flex row justify-content-center mx-auto">
            <div className = "container d-flex flex-row mx-5 justify-content-center">
                <div className = "col p-1 ">
                   <img src={process.env.PUBLIC_URL + "/images/hook-about-2.jpeg"} alt="hook shop 1" className="w-100"></img>
                </div>
                <div className = "col p-1 ">
                  <img src={process.env.PUBLIC_URL + "/images/hook-about-3.jpeg"} alt="hook shop 2" className="w-100"></img>
                </div>
                <div className = "col p-1">
                   <img src={process.env.PUBLIC_URL + "/images/hook-about-1.jpeg"} alt="hook shop 3" className="w-100"></img>
                </div>
            </div>
            <div className = "d-flex flex-row p-1 text-center">
                   <img src={process.env.PUBLIC_URL + "/images/3dprintgif.gif"} alt="hook shaving gif"  className = "col"></img>
            </div>
            <h2 className = "pt-3 text-center">designed & made in houston, tx</h2>
            <p className = "text-center mb-0">a handle with a hook allows for easy storage.</p>
            <p className = "text-center mb-0">it also provides new gripping methods for a better shaving experience.</p>
            <p className = "text-center mb-0">our current design is 3d printed but we aim to manufacture as scale soon.</p>
            <form>
                share your email to stay up-to-date:
                <input type="text" className="ml-1" placeholder="email"/>
<button type="submit" className=" ml-1 btn btn-dark">submit</button>
                
            </form>
            <div className="row">
                <Button name="Add To Bag"/>
            </div >
            <div className="row">
                <Button name="Ckeckout"/>           
            </div>
        </div>
    )
}