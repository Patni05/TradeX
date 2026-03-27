import React from 'react';

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <section className="container py-5">
      <div className="row align-items-center gy-4">

        {/* LEFT → IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src={imageUrl}
            alt={productName}
            className="img-fluid w-75"
          />
        </div>

        {/* RIGHT → CONTENT */}
        <div className="col-md-6">

          <h2 className="fw-bold mb-3">{productName}</h2>

          <p className="mb-4">
            {productDescription}
          </p>

          {/* LINKS */}
          <div className="d-flex gap-4 mb-4">
            <a href={tryDemo} className="text-primary text-decoration-none fw-medium">
              Try Demo →
            </a>

            <a href={learnMore} className="text-decoration-none fw-medium">
              Learn More →
            </a>
          </div>

          {/* STORE BUTTONS */}
          <div className="d-flex align-items-center gap-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ height: "40px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ height: "40px" }}
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LeftSection;