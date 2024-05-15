import React from "react";
import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <h2>Vidhi Jawanjal</h2>
      </div>
      <div className="icons">
        <i className="fa-solid fa-ellipsis"></i>
        <i className="fa-solid fa-video"></i>
        <i className="fa-regular fa-pen-to-square"></i>
      </div>
    </div>
  );
};

export default UserInfo;
