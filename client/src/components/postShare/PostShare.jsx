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
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../actions/uploadAction";

function PostShare() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const { user } = useSelector((state) => state.authReducer.authData);
  const imageRef = useRef();

  const desc = useRef();

  const onImagechange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc,
    };

    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input
          ref={desc}
          required
          type="text"
          placeholder="What's happening?"
        />
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
          <button className="button ps-button" onClick={handleSubmit}>
            Share
          </button>
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
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostShare;
