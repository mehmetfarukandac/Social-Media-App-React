import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.png";
import "./ProfileCard.css";

function ProfileCard() {
  const profilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="profileName">
        <span>Alex De Souza</span>
        <span>Coach</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>8.283.672</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Following</span>
          </div>

          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>1</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {profilePage ? "" : <span>MyProfile</span>}
    </div>
  );
}

export default ProfileCard;
