import React from "react";
import "./details.css";

const Details = () => {
  return (
    <div className="details">
      <div className="user">
        <img
          src="https://imgv3.fotor.com/images/slider-image/A-blurry-close-up-photo-of-a-woman.jpg"
          alt=""
        />
        <h2>Vidhi Jawanjal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eius
          laboriosam placeat in consequatur quam.
        </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <i class="fa-solid fa-angle-up"></i>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <i class="fa-solid fa-angle-up"></i>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <i class="fa-solid fa-download"></i>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <i class="fa-solid fa-download"></i>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <i class="fa-solid fa-download"></i>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <i class="fa-solid fa-download"></i>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <i class="fa-solid fa-angle-up"></i>
          </div>
        </div>

        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Details;
