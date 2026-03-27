import React from "react";

function Pricing() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* LEFT TEXT */}
        <div className="col-md-6">
          <h2 className="mb-3 fw-bold">Unbeatable Pricing</h2>

          <p className="pricing-text mb-4">
            TradeX offers simple and transparent pricing. No hidden charges,
            no complicated plans. Start investing with confidence.
          </p>

          <a href="#" className="pricing-link">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>


        {/* RIGHT CARDS */}
        <div className="col-md-6">
          <div className="row g-4">

            {/* ₹0 */}
            <div className="col-md-6">
              <div className="pricing-card text-center p-4">
                <i className="fa-solid fa-indian-rupee-sign text-primary fs-3 mb-3"></i>
                <h1 className="fw-bold">₹0</h1>
                <p>Free equity delivery and direct mutual fund investments.</p>
              </div>
            </div>

            {/* ₹20 */}
            <div className="col-md-6">
              <div className="pricing-card text-center p-4">
                <i className="fa-solid fa-chart-line text-success fs-3 mb-3"></i>
                <h1 className="fw-bold">₹20</h1>
                <p>Flat brokerage per order for intraday and F&O trades.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Pricing;