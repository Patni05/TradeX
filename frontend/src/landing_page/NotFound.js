import React from "react";

function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">

      <h1 className="display-1 fw-bold text-primary">404</h1>

      <h3 className="mb-3">Page Not Found</h3>

      <p className=" mb-4">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

     <a href="/" className="btn  px-4 text-white" style={{ color: "#fff !important" }}>
  Go Back Home
</a>

    </div>
  );
}

export default NotFound;