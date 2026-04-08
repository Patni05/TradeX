import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const context = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = () => axios.post("http://localhost:3002/newOrder", {
  name: uid,
  qty: stockQuantity,
  price: stockPrice,
  mode: "SELL",

})
.then(() => {
  alert("Sell order placed ✅");
  context.closeSellWindow();
})
.catch((err) => {
  alert(err.response?.data);  // 👈 THIS SHOWS ERROR
})
;

  const handleCancelClick = () => {
    context.closeSellWindow();
  };

  return (
    <div className="overlay">
      <div className="container" id="sell-window">

        {/* HEADER */}
        <div className="header sell">
          <h3>{uid} <span>SELL</span></h3>
        </div>

        {/* BODY */}
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
              />
            </fieldset>

            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
              />
            </fieldset>
          </div>
        </div>

        {/* FOOTER */}
        <div className="buttons">
          <span>Margin required ₹140.65</span>

          <div>
            <button className="btn btn-red" onClick={handleSellClick}>
              Sell
            </button>

            <button className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SellActionWindow;