import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},

});


// For Buy Window....
export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

// For Sell Window....
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

// Handlers For Buy Window....
  const handleOpenBuyWindow = (uid) => {
  setIsSellWindowOpen(false); // 🔥 close sell
  setIsBuyWindowOpen(true);
  setSelectedStockUID(uid);
};

 const handleOpenSellWindow = (uid) => {
  setIsBuyWindowOpen(false); // 🔥 close buy
  setIsSellWindowOpen(true);
  setSelectedStockUID(uid);
};


  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

//Handlers For Sell Window....



const handleCloseSellWindow = () => {
  setIsSellWindowOpen(false);
  setSelectedStockUID("");
};


  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
