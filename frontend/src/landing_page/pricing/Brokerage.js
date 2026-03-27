import React from "react";

function Brokerage() {
  const cardStyle = {
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
  };

  return (
    <section className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Brokerage Charges</h2>
        <p className="">
          Transparent pricing across all segments
        </p>
      </div>

      <div className="row g-4">

        {/* ₹0 - Free */}
        <div className="col-md-4">
          <div
            className="border rounded-4 p-4 text-center h-100"
            style={cardStyle}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            <img
              src="media/images/pricingEquity.svg"
              alt="Free"
              className="img-fluid mb-4"
              style={{ height: "100px", objectFit: "contain" }}
            />

            <h4 className="fw-bold">₹0</h4>
            <p className=" mb-0">Free equity delivery</p>
          </div>
        </div>

        {/* ₹20 - Intraday */}
        <div className="col-md-4">
          <div
            className="border rounded-4 p-4 text-center h-100"
            style={cardStyle}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            <img
              src="media/images/intradayTrades.svg"
              alt="Intraday"
              className="img-fluid mb-4"
              style={{ height: "100px", objectFit: "contain" }}
            />

            <h4 className="fw-bold">₹20</h4>
            <p className="mb-0">Intraday & F&O trades</p>
          </div>
        </div>

        {/* ₹0 - Direct MF */}
        <div className="col-md-4">
          <div
            className="border rounded-4 p-4 text-center h-100"
            style={cardStyle}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            <img
              src="media/images/pricingEquity.svg"
              alt="Mutual Funds"
              className="img-fluid mb-4"
              style={{ height: "100px", objectFit: "contain" }}
            />

            <h4 className="fw-bold">₹0</h4>
            <p className="mb-0">Direct mutual funds</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Brokerage;