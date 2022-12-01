import React from "react";
import CustomLInk from "../CustomLink/CustomLInk";

const Header = () => {
  return (
    <div>
      <h1>This is header router with Hedam!!</h1>
      <ul>
        <CustomLInk to="/" end>
          Home{" "}
        </CustomLInk>
        <CustomLInk to="/friend">Friend</CustomLInk>
        <CustomLInk to="/about">About</CustomLInk>
        <CustomLInk to="/contact">Contact</CustomLInk>
      </ul>
    </div>
  );
};

export default Header;
