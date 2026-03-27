import React from "react";

function Awards() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center mb-4">
          <img
            src="media/images/largestBroker.svg"
            alt="largest broker"
            className="img-fluid awards-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-6">

          <h1 className="mb-3">
            Largest Stock Broker in India
          </h1>

          <p className="awards-para mb-4">
            2+ million clients contribute to over 15% of all retail order
            volumes in India daily. TradeX helps investors trade smarter
            with powerful tools and a simple platform.
          </p>

          {/* LIST */}
          <div className="row">

            <div className="col-6">
              <ul className="list-unstyled awards-list">

                <li>
                  <i className="fa-solid fa-chart-line me-2"></i>
                  Futures & Options
                </li>

                <li>
                  <i className="fa-solid fa-coins me-2"></i>
                  Commodity Derivatives
                </li>

                <li>
                  <i className="fa-solid fa-dollar-sign me-2"></i>
                  Currency Derivatives
                </li>

              </ul>
            </div>

            <div className="col-6">
              <ul className="list-unstyled awards-list">

                <li>
                  <i className="fa-solid fa-chart-column me-2"></i>
                  Stocks & IPOs
                </li>

                <li>
                  <i className="fa-solid fa-piggy-bank me-2"></i>
                  Direct Mutual Funds
                </li>

                <li>
                  <i className="fa-solid fa-landmark me-2"></i>
                  Bonds & Government Securities
                </li>

              </ul>
            </div>

          </div>

          {/* PRESS LOGOS */}
          <img
            src="media/images/pressLogos.png"
            alt="press logos"
            className="img-fluid awards-logos mt-4"
          />

        </div>

      </div>

    </div>
  );
}

export default Awards;