import React from "react";

function Education() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/education.svg"
            alt="education"
            className="img-fluid edu-image"
          />
        </div>


        {/* RIGHT TEXT */}
        <div className="col-md-6">

          <h2 className="mb-3">Free and open market education</h2>

          <p className="edu-text">
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="edu-link">
            Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>

          <p className="edu-text mt-4">
            TradingQ&A is the most active trading and investment community
            in India for all your market related queries.
          </p>

          <a href="#" className="edu-link">
            TradingQ&A <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>

        </div>

      </div>

    </div>
  );
}

export default Education;