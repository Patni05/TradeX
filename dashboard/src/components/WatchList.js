import React, { useState, useContext } from "react";
import { Tooltip, Grow, Button } from "@mui/material";
import { watchlist } from "../data/data";
import { Bar } from 'react-chartjs-2'
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import GeneralContext from "./GeneralContext";
import DonoutChart from "./DonoutChart";


// 🔥 MAIN COMPONENT
const WatchList = () => {

  // ✅ Proper chart data
const chartData = {
  labels: watchlist.map((item) => item.name),
  datasets: [
    {
      label: "Price",
      data: watchlist.map((item) => item.price),

      // ✅ REQUIRED for doughnut
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40'
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div className="watchlist-container">

      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      {/* List */}
      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      {/* ✅ Chart ONLY ONCE */}
      <div style={{ height: "300px", marginTop: "20px" }}>
        <DonoutChart data={chartData} />
      </div>
    </div>
  );
};

export default WatchList;



// 🔥 ITEM COMPONENT
const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};



// 🔥 ACTIONS COMPONENT
const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
        <button
          className="buy"
          onClick={() => generalContext.openBuyWindow(uid)}
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
        <button
          className="sell"
          onClick={() => generalContext.openSellWindow(uid)}
        >
          Sell
        </button>
      </Tooltip>

      <Tooltip title="Analytics (A)" arrow TransitionComponent={Grow}>
        <Button className="action">
          <BarChartOutlined className="icon" />
        </Button>
      </Tooltip>

      <Tooltip title="More (M)" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};