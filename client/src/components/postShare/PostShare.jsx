import React from "react";
import ProfileImage from "../../img/profileImg.png";
import "./PostShare.css";
import {
  UilScenery,
  UilSchedule,
  UilPlayCircle,
  UilLocationPoint,
  UilTimes,
} from "@iconscout/react-unicons";
import { useState } from "react";
import { useRef } from "react";

function PostShare() {
  const [image, setimage] = useState(null);
  const imageRef = useRef();

  const onImagechange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setimage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening?" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilSchedule />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilPlayCircle />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilLocationPoint />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImagechange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={()=>setimage(null)}/>
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
