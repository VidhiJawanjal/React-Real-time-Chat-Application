import React, { useEffect, useRef, useState } from "react";
import "./chats.css";
import EmojiPicker from "emoji-picker-react";

const Chats = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(false);

  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  const handleEmoji = (e) => {
    console.log(e);
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chats">
          {/* ............... top ............... */}
      <div className="top">
        <div className="userInfo">
          <img
            src="https://caps.sa.ucsb.edu/sites/default/files/default_images/generic-user-icon.jpg"
            alt=""
          />
          <div className="texts">
            <span>Shivam Ronghe</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              libero.
            </p>
          </div>
        </div>
        <div className="icons">
          <i className="fa-solid fa-video"></i>
          <i className="fa-solid fa-phone"></i>
          <i className="fa-solid fa-info"></i>
        </div>
      </div>
      {/* ............... center ............... */}
      <div className="center">
        <div className="message">
          

          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, praesentium dolorum neque vitae ratione facere deserunt? Necessitatibus, nisi. Ut, consequuntur?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message owner">
          

          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, praesentium dolorum neque vitae ratione facere deserunt? Necessitatibus, nisi. Ut, consequuntur?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          

          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, praesentium dolorum neque vitae ratione facere deserunt? Necessitatibus, nisi. Ut, consequuntur?
              
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message owner">

          <div className="texts">
              <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715817600&semt=ais_user" alt="" />

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, praesentium dolorum neque vitae ratione facere deserunt? Necessitatibus, nisi. Ut, consequuntur?Lorem ipsum dolor sit amet qwer
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      {/* ............... bottom ............... */}
      <div className="bottom">
        <div className="icons">
          <i className="fa-solid fa-image"></i>
          <i className="fa-solid fa-camera"></i>
          <i className="fa-solid fa-microphone"></i>
        </div>
        <input
          type="text"
          value={text}
          placeholder="Typ a message..."
          onChange={(e) => setText(e.target.value)}
          name=""
          id=""
        />
        <div className="emoji">
          <i
            onClick={() => setOpen((prev) => !prev)}
            className="fa-solid fa-face-grin"
          ></i>
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendbutton">send</button>
      </div>
    </div>
  );
};

export default Chats;
 