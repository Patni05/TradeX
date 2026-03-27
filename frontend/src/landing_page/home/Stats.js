import React from "react";

function Stats() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-md-6">

          <h1 className="mb-4 fs-2">Trust With Confidence</h1>

          <div className="stats-block">

            <h2 className="fs-4">
              <i className="fa-solid fa-user-shield me-2 text-primary"></i>
              Built for Modern Investors
            </h2>
            <p className="hero-text">
              TradeX is designed to make investing simple, fast, and accessible
              for everyone—from beginners to experienced traders.
            </p>

            <h2 className="fs-4 mt-4">
              <i className="fa-solid fa-scale-balanced me-2 text-success"></i>
              Transparent & Honest
            </h2>
            <p className="hero-text">
              No hidden charges, no confusing terms. TradeX believes in
              complete transparency so you always know where your money goes.
            </p>

            <h2 className="fs-4 mt-4">
              <i className="fa-solid fa-layer-group me-2 text-warning"></i>
              The TradeX Ecosystem
            </h2>
            <p className="hero-text">
              From stocks to long-term investments, TradeX provides powerful
              tools and insights to help you grow your portfolio.
            </p>

            <h2 className="fs-4 mt-4">
              <i className="fa-solid fa-chart-line me-2 text-info"></i>
              Grow Your Wealth Smarter
            </h2>
            <p className="hero-text">
              With smart analytics and an easy-to-use platform, TradeX helps
              you make better financial decisions every day.
            </p>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="col-md-6 text-center">

          <img
            src="media/images/stats5.png"
            alt="ecosystem"
            className="img-fluid stats-image"
          />

          <div className="mt-4">

            <a className="stats-link me-4" href="google.com">
              Explore <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>

            <a className="stats-link" href="google.com">
              Try demo <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Stats;