import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";

import UserInfo from "./UserInfo";
// import { jwtDecode } from "jwt-decode";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

 const handleProfileClick = (e) => {
  e.stopPropagation(); // ✅ IMPORTANT
  setIsProfileDropdownOpen(!isProfileDropdownOpen);
};

useEffect(() => {
  const handleClickOutside = () => {
    setIsProfileDropdownOpen(false);
  };

  window.addEventListener("click", handleClickOutside);

  return () => {
    window.removeEventListener("click", handleClickOutside);
  };
}, []);



  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
              Dashboard
            </p></Link>
          </li>

          <li>
             <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
            <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
              Orders
            </p></Link>
          </li>

          <li>
             <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
              Holdings
            </p></Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
              Positions
            </p></Link>
          </li>

          <li>
             <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
              Funds
            </p></Link>
          </li>

          <li>
            <p>Apps</p>
          </li>
        </ul>
        <hr />

     <div className="profile" onClick={handleProfileClick}>
  <div className="avatar">👤</div>
</div>

{/* ✅ Dropdown */}
{isProfileDropdownOpen && (
  <div className="profile-dropdown" onClick={(e) => e.stopPropagation()}>

    <UserInfo />



  <hr />

  {/* NEW FEATURES */}
<button
  className="dropdown-btn"
  onClick={(e) => {
    e.stopPropagation();
    window.location.href = "/settings";
  }}
>
  ⚙️ Settings
</button>
  <button className="dropdown-btn">📊 Profile</button>

  <button
    className="logout-btn"
    onClick={(e) => {
      e.stopPropagation();
      localStorage.removeItem("token");
      window.location.href = "http://localhost:3001/login";
    }}
  >
    Logout 🚪
  </button>
</div>
)}



      </div>
    </div>
  );
};

export default Menu;
