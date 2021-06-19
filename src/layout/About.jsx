import React from "react"

export default function Shop(){

    return(
        <div className="container col-sm col-lg-6 py-1 px-5 mt-1 d-flex row justify-content-center mx-auto fade-in-image">
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
            
            <h2 className = "mt-3 mb-0 text-center">designed & made in houston, tx</h2>
            <p className = "mt-3 text-center mb-0">hang for storage.</p>
            <p className = "text-center mb-0">more grip variations.</p>
            <p className = "text-center mb-0">better shaving experience.</p>
            <h4 className = "mt-3 text-center mb-0">our current design is 3d printed. </h4>
            <div className = "d-flex flex-row p-1 mt-3 text-center">
                   <img src={process.env.PUBLIC_URL + "/images/3dprintgif.gif"} alt="hook shaving gif"  className = "col"></img>
            </div>
            <form className="mt-3 px-3 text-center">
                share your email for discounts:
               <div className="container-fluid m-0 p-0 d-flex flex-row justify-content-center">
                <input type="email" className="text-center w-75 mx-0 p-0" placeholder="email"/>
                <button type="submit" className="btn btn-dark w-25 mx-0">{'>'}</button>             
               </div>
            </form>
            {/* <div className="mt-3 row p-1">
                <Button name="Add To Bag" link="about"/>
            </div >
            <div className="row p-1">
                <Button name="Ckeckout" link="bag"/>           
            </div> */}
        </div>
    )
}