import React, {useState} from "react"
import {useBagContext} from "./Context"
import {createCheckout} from "../utils/api" 
import ErrorAlert from "./ErrorAlert"
import "./Landing.css"

export default function Bag(){
    const {bag, setBag, blackBag, whiteBag, setBlackBag, setWhiteBag}=useBagContext();
    const [errors, setErrors] = useState(null);
    const [redirect, setRedirect]=useState(false);
    const handleCheckout =  async (e) => {
        e.preventDefault();
        try {
            setRedirect(true);
           await createCheckout({"blackQuantity":blackBag,  "whiteQuantity":whiteBag});
        } catch (err) {
           setErrors(err);
        }
     };
 
    return(
        <>
        <script src="https://js.stripe.com/v3/"></script>
        <div className = "container col-sm col-lg-6 py-1 px-5 mt-1 d-flex row justify-content-center mx-auto fade-in-image">
            <h2 className = "mt-3 text-center">
                bag checkout
            </h2>
            <div className="row px-0 mt-3">
                <div className="col px-0">
                <img
                  src={
                     process.env.PUBLIC_URL +
                     `/images/hook-shop-3.jpg`
                  }
                  alt="hook black bag"
                  className="w-100"

               />
                </div>
                <div className="col text-center m-auto px-0">
                    <h3>black</h3>
                    <h3 className="">qty: {blackBag}</h3>
                    <button className = "btn btn-outline-dark btn-sm m-1 col-4" onClick={()=> blackBag===0?null:(setBag(bag-1),setBlackBag(blackBag-1))}>-</button>
                    <button className = "btn btn-outline-dark btn-sm m-1 col-4 font-weight-bold" onClick={()=>{
                            setBag(bag+1);
                            setBlackBag(blackBag+1);
                            }}>
                    +
                    </button>
                </div>
            </div>
            <div className="row px-0 mt-3">
                <div className="col px-0">
                <img
                  src={
                     process.env.PUBLIC_URL +
                     `/images/hook-shop-3-white.jpg`
                  }
                  alt="hook white bag"
                  className="w-100"

               />
                </div>
                <div className="col text-center m-auto px-0">
                    <h3>white</h3>
                    <h3 className="">qty: {whiteBag}</h3>
                    <button className = "btn btn-outline-dark btn-sm m-1 col-4" onClick={()=> whiteBag===0?null:(setBag(bag-1),setWhiteBag(whiteBag-1))}>-</button>
                    <button className = "btn btn-outline-dark btn-sm m-1 col-4 font-weight-bold" onClick={()=>{
                            setBag(bag+1);
                            setWhiteBag(whiteBag+1);
                            }}>
                    +
                    </button>
                </div>
            </div>
            <p className="mt-3 text-center">each hook razor comes with two razor cartridges.</p>
            <p className="text-center mb-0">free shipping. free returns. zero tax.</p>
            <h3 className="mt-3 text-center">total orders: {bag}</h3>
            
            <div className="w-100 px-3 mx-auto mt-3" display={bag?"none":"block"}>
                <h3 className="text-center blink" hidden={!redirect}>...redirecting to stripe checkout</h3>
                <button className="btn btn-dark w-100" disabled={!bag} onClick={handleCheckout}>checkout ${bag*15}<small>.00</small></button>
            </div>
            <ErrorAlert error={errors} />
        </div>
        </>
    )
}