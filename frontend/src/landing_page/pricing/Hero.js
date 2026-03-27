import React from "react";

function Hero() {
  return (
    <section className="container py-5 text-center">

      <h1 className="fw-bold display-5 mb-3">
        Simple & Transparent Pricing
      </h1>

      <p className=" fs-5 mb-4">
        No hidden charges. Trade smarter with low brokerage across all segments.
      </p>

      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-primary px-4">
          Get Started
        </button>

        <button className="btn btn-primary px-4">
          View Plans
        </button>
      </div>

    </section>
  );
}

export default Hero;