import React from "react";
import "./cards.css";
function Cards(props) {
  return (
    <>
      <div className="grid-item">
        <div className="pricing">
          <h1 className="time">{props.time}</h1>
          <h2>{props.offer}</h2>
          <p className="mycontent">
            <span style={{ color: "#d71920" }}>{props.data}</span> GB DATA (IMO,
            WhatsApp, YouTube, Facebook &amp; BiP)
            <br /> <span style={{ color: "#d71920" }}>
              {props.jazzmin}
            </span>{" "}
            Jazz Mins
            <br /> <span style={{ color: "#d71920" }}>{props.othernetmin}</span>
            Other Network Mins
            <br /> <span style={{ color: "#d71920" }}>{props.sms}</span> SMS
          </p>
          <p style={{ color: "#d71920" }}>{props.price}(Incl. Tax)</p>
          <button className="btn">Subscribe</button>
          <div className="div-wrapper">
            <img
              className="d-block thumb-mob-img img-anima mt-0 img-fluid"
              src={props.img}
              alt="Monthly Super Duper"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
