import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "./Calendar";

const PhotoCard = props => {
  const API_KEY = "V968XCMRFgcMhgWrIgUtk7o1aAQ8mBKDdlIv9DMx";

  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [photoDate, setPhotoDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${photoDate}`
      )
      .then(response => {
        console.log(response);
        const data = response.data;
        setPhoto(data.url);
        setTitle(data.title);
        setDescription(data.explanation);
      });
  }, [photoDate]);

  return (
    <div>
      <Calendar setPhotoDate={setPhotoDate} />
      <div className="photo-card">
        <div className="photo-image">
          <img src={photo} alt={title} />
          <h1>{title}</h1>
          <p className="photo-date">{photoDate}</p>
          <p className="photo-desc">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
