import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const context = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

 const handleBuyClick = () => {
  axios.post("http://localhost:3002/newOrder", {
    name: uid,
    qty: stockQuantity,
    price: stockPrice,
    mode: "BUY",
  })
  .then((res) => {
    alert("Buy order placed ✅");   // ✅ success popup
    context.closeBuyWindow();
  })
  .catch((err) => {
    alert(err.response?.data || "Something went wrong ❌"); // ❌ error popup
  });
};

  const handleCancelClick = () => {
    context.closeBuyWindow(); // ✅ fixed
  };

  return (
    <div className="overlay">
      <div className="container" id="buy-window">

        {/* 🔵 HEADER */}
        <div className="header buy">
          <h3>
            {uid} <span>BUY</span>
          </h3>
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
                step="0.05"
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
            <button
              type="button"
              className="btn btn-blue"
              onClick={handleBuyClick}
            >
              Buy
            </button>

            <button
              type="button"
              className="btn btn-grey"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BuyActionWindow;