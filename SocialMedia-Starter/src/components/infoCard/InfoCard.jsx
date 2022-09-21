import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

function InfoCard() {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Brazillian</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>São Paulo FC</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
}

export default InfoCard;
