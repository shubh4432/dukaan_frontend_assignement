import React from "react";
import "./footer.css";
import dukaanLogo from "../images/dukaanlogo.png";
import flagIcon from "../images/Frame.png"

const footer = () => {
  return (
    <>
      <div className="footer">
          <div style={{display:"flex", flexDirection:"row"}}>
        <div className="footer-logo">
          <img style={{ height: "30px" }} src={dukaanLogo} alt="" />
          <h2 style={{ color: "#FFFFFF", marginLeft: "5px", fontWeight:"700" }}>dukaan&#174;	</h2>
        </div>
        <div className="footer-list">
          <p>Contact</p>
          <p>Tutorials</p>
          <p>Privacy</p>
          <p>FAQ's</p>
          <p>Blog</p>
          <p>Banned Items</p>
          <p>About</p>
          <p>Jobs</p>
        </div>
        <div
          style={{
            color: "#FFFFFF",
            marginTop: "65px",
            fontSize: "18px",
            padding: "3px",
          }}
        >
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </div>
        </div>
        <hr style={{color: "#FFFFFF", opacity: "20%", width: "80%", marginTop: "10px"}}/>
        <div className="sub-footer" style={{display:"flex"}}>
            <p>Dukaan 2020, All rights reserved.</p>
            <div style={{display:"flex", alignItems:"center"}}>
            <p>Made in </p>
            <img style={{height:"20px", marginLeft:"5px"}}src={flagIcon}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default footer;
