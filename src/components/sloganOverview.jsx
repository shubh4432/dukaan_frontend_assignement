import React from "react";
import "./sloganOverview.css";

const sloganOverview = () => {
  return (
    <div className="overviewContainer">
      <div className="overviewHeading">
        <h1
          style={{
            marginRight: "10rem",
            color: "#1A181E",
            fontWeight: "600",
            fontSize: "36px",
          }}
        >
          Free slogan maker
        </h1>
        <p style={{ color: "#4D4D4D", fontSize: "20px", fontWeight: "400" }}>
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>

        <p
          style={{
            marginRight: "18rem",
            marginTop: "3rem",
            color: "#4D4D4D",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          {" "}
          Word for your slogan
        </p>
        <input
          type="search"
          placeholder="cozy"
          style={{
            borderColor: "#D9D9D9",
            border: "1px solid #D9D9D9",
            borderRadius: "4px",
            width: "352px",
            height: "40px",
          }}
        />
        <div style={{ marginTop: "10px" }}>
          <button
            style={{
              backgroundColor: "#146EB4",
              borderRadius: "4px",
              height: "50px",
              width: "177px",
              color: "#FFFFFF",
              borderColor: "#FFF",
              fontSize: "18px",
              borderStyle: "solid",
              marginTop: "30px",
            }}
          >
            Generate slogans
          </button>
        </div>
      </div>
      <hr
        style={{
          width: "72%",
          marginTop: "48px",
          opacity: "20%",
          color: "#D9D9D9",
        }}
      />
      {/* <Button /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h5
          style={{ marginRight: "155px", color: "#1A181E", fontSize: "20px" }}
        >
          We have generated 1,023 slogans for “cozy”
        </h5>
        <button
          style={{
            width: "157px",
            height: "30px",
            backgroundColor: "#FFFFFF",
            borderColor: "#146EB4",
            color: "#146EB4",
            fontSize: "18px",
            borderStyle: "solid",
          }}
        >
          Download all
        </button>
      </div>
      <div className="parent-slogan-container">
        <div className="slogan-container">
          <p style={{ marginTop: "3px", marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <div className="slogan-container">
          <p style={{ marginLeft: "4px" }}>
            There is no Sore it will Not Heal, No cool it will not Subdue.
          </p>
        </div>
        <hr
          style={{
            marginLeft: "170px",
            width: "190%",
            marginTop: "48px",
            opacity: "20%",
            color: "#D9D9D9",
          }}
        />
      </div>
      <div className="parent-pagination-class">
        <p className="pagination-class">1</p>
        <p className="pagination-sub-class">2</p>
        <p className="pagination-sub-class">3</p>
        <p className="pagination-sub-class">...</p>
        <p className="pagination-sub-class">21</p>
        <div
          style={{
            position: "relative",
            left: "230px",
            color: "#146eb4",
            fontSize: "20px",
          }}
        >
          Next {`>`}
        </div>
      </div>
    </div>
  );
};

export default sloganOverview;
