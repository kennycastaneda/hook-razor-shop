import React from "react"

export default function Shop(){

    return(
        <div className="container p-5 mt-5 d-flex row justify-content-center mx-auto">
            <div className = "container d-flex row w-sm-100 w-md-75 mx-5 justify-content-center">
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
            <div className = "row p-1 w-sm-100 w-md-75 text-center">
                   <img src={process.env.PUBLIC_URL + "/images/3dprintgif.gif"} alt="hook shaving gif"  className = "col w-50"></img>
            </div>
                     
        </div>
    )
}