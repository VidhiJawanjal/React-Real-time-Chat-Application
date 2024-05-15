import React, { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searhBar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Seach"
            name="search"
            id="search"
            className="search"
          />
        </div>
        <i
          className={addMode ? "fa-solid fa-minus add" : "fa-solid fa-plus add"}
          onClick={()=>setAddMode((pre)=> !pre)}
        ></i>
      </div>

      <div className="item">
        <img src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"  alt="" />
        <div className="texts">
          <span>Shivam Ranghe</span>
          <p>Lorem ipsum dolor sit amet.</p>
          <p></p>
        </div>
      </div>
      <div className="item">
        <img src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"  alt="" />
        <div className="texts">
          <span>Shivam Ranghe</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="item">
        <img src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"  alt="" />
        <div className="texts">
          <span>Shivam Ranghe</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="item">
        <img src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"  alt="" />
        <div className="texts">
          <span>Shivam Ranghe</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="item">
        <img src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"  alt="" />
        <div className="texts">
          <span>Shivam Ranghe</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="item">
        <img src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"  alt="" />
        <div className="texts">
          <span>Shivam Ranghe</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="item">
        <img src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"  alt="" />
        <div className="texts">
          <span>Shivam Ranghe</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="item">
        <img src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"  alt="" />
        <div className="texts">
          <span>Shivam Ranghe</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
