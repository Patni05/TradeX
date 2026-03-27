import React from "react";
import SearchBox from "../SearchBox";

function Hero() {
  return (
    <section className="container-fluid py-4" id="supportHero">

      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center px-4 mb-4">
        <h4 className="m-0 text-white">Support Portal</h4>
        <a href="#" className="text-white text-decoration-none fs-6">
          Track Tickets →
        </a>
      </div>

      {/* Main Section */}
      <div className="row px-4 py-4">

        {/* LEFT */}
        <div className="col-md-6 mb-4">

          <h5 className="text-white mb-3">
            Search for answers or browse help topics
          </h5>

          {/* <input
            type="text"
            placeholder="Search your query..."
            className="form-control mb-3"
          /> */}

          <SearchBox/>

          {/* Quick Links */}
          <div className="d-flex gap-3 flex-wrap">
            <a href="#" className="text-white text-decoration-none fs-6">
              Track Account
            </a>
            <a href="#" className="text-white text-decoration-none fs-6">
              Funds
            </a>
            <a href="#" className="text-white text-decoration-none fs-6">
              KYC
            </a>
          </div>

        </div>

        {/* RIGHT */}
        <div className="col-md-6">

          <h5 className="text-white mb-3">Featured</h5>

          <ul className="list-unstyled">

            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none fs-6">
                → Current Takeover updates
              </a>
            </li>

            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none fs-6">
                → Latest leverage rules
              </a>
            </li>

            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none fs-6">
                → How to create a support ticket
              </a>
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default Hero;