import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      {/* 导航 */}
      <nav>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
        <Link to="/profile">profile</Link>
      </nav>
    </>
  );
}

export default Nav;
