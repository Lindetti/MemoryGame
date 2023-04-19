import "./Easy.scss";
import { useState, useEffect } from "react";

const Easy = () => {
  const images = [
    "monster1.png",
    "monster1.png",
    "monster2.png",
    "monster2.png",
    "monster3.png",
    "monster3.png",
    "monster4.png",
    "monster4.png",
    "monster5.png",
    "monster5.png",
    "monster6.png",
    "monster6.png",
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);
  const [imageOrder, setImageOrder] = useState([]);

  useEffect(() => {
    setImageOrder(images.sort(() => Math.random() - 0.5));
  }, []);

  const showImage = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };



  return (
    <div className="easyPage-wrapper">
      <div className="content">
        {imageOrder.map((src, index) => {
          return (
            <div className="image-box" key={index}>
              <div
                className={`show-front ${
                  flippedIndex === index ? "hide" : ""
                }`}
                onClick={() => showImage(index)}
              >
                <p>Front</p>
              </div>
              <div
                className={`show-back ${
                  flippedIndex === index ? "" : "hide"
                }`}
                onClick={() => showImage(index)}
              >
                <img src={src} alt="image" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Easy;
