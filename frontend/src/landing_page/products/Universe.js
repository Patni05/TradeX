import React from "react";

function Universe() {
  const logoStyle = {
    height: "50px",       // 🔥 same height for all
    objectFit: "contain"  // keeps aspect ratio
  };

  return (
    <section className="container py-5 text-center">


      <div className="mb-5">
        <h1 className="fw-bold">The Tradex Universe</h1>
        <p className="">
          Extend your trading and investment experience with our partner platforms
        </p>
      </div>

      <div className="row g-5 align-items-center">

        <div className="col-md-4">
          <img src="media/images/smallcaseLogo.png" style={logoStyle} className="mb-3" />
          <p className="">Thematic investment platform</p>
        </div>


        <div className="col-md-4">
          <img src="media/images/streakLogo.png" style={logoStyle} className="mb-3" />
          <p className="">Strategy-based trading and backtesting platform</p>
        </div>

        <div className="col-md-4">
          <img src="media/images/sensibullLogo.svg" style={logoStyle} className="mb-3" />
          <p className="">Options trading and analytics platform</p>
        </div>


        <div className="col-md-4">
          <img src="media/images/zerodhaFundhouse.png" style={logoStyle} className="mb-3" />
          <p className="">Simple and transparent index fund solutions</p>
        </div>

        <div className="col-md-4">
          <img src="media/images/goldenpiLogo.png" style={logoStyle} className="mb-3" />
          <p className="">Bond investment platform for stable returns</p>
        </div>

        <div className="col-md-4">
          <img src="media/images/dittoLogo.png" style={logoStyle} className="mb-3" />
          <p className="">Insurance advisory platform for better decisions</p>
        </div>
         <button style={{width:"20%", margin:"0 auto"}}   className='btn mt-4 btn-primary p-3 fs-5 mb-5' >Sign Up</button>

      </div>
    </section>
  );
}

export default Universe;