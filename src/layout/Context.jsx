import React, { createContext, useContext, useState } from "react";

export const BagContext = createContext();

export const ContextProvider = ({ children }) => {
  const [click, setClick] = useState(false);
  const [bag, setBag] = useState(0);
  const [blackBag, setBlackBag]=useState(0);
  const [whiteBag, setWhiteBag]=useState(0);
  const handleBagClick = () => {
    
  };
  const handleBagSubmit = () => {
    
  };
  return (
    <BagContext.Provider
      value={{
        click,
        setClick,
        bag,
        blackBag,
        whiteBag,
        setWhiteBag,
        setBlackBag,
        setBag,
        handleBagClick,
        handleBagSubmit,
       
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export function useBagContext() {
  return useContext(BagContext);
}
