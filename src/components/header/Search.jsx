import React from "react";
import logo from "../../features/assets/images/logo.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
function Search({ CartItem }) {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <div>
      <div className="search ">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="search..." />
            <span>All Categories</span>
          </div>
          <div className="icon f_flex width ">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart ">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
              </Link>
              <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
