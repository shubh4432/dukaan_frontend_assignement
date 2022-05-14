import React from "react";
import logo from "../images/Vector.png";

const Header = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#146EB4",
          display: "flex",
          justifyContent: "space-evenly",
          height: "328px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft:"55px",
            marginBottom: "230px",
          }}
        >
          <img style={{ height: "25px" }} src={logo} alt="LOGO-IMG" />
          <h2 style={{ color: "#FFFFFF", marginLeft: "3px" }}> dukaan&#174;	</h2>
        </div>
        <div style={{ marginTop: "20px", marginLeft:"600px" }}>
          <span style={{ color: "#FFFFFF", marginRight: "20px" }}>Sign In</span>
          <button
            style={{
              borderRadius: "4px",
              height: "50px",
              width: "177px",
              color: "#146EB4",
              borderColor: "#FFF",
              fontSize: "18px",
              borderStyle: "solid",
            }}
          >
            Dukaan for PC
          </button>
        </div>
      </div>
      
    </>
  );
};

export default Header;
