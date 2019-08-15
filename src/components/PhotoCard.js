import React, { useState, useEffect } from "react";
import axios from "axios";
import DateButtons from "./DateButtons";
import Calendar from "./Calendar";
import styled from "styled-components";

const Card = styled.div`
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 0 1.5rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Photo = styled.img`
  width: 57%;
  max-height: 550px;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const Title = styled.h1`
  color: #000;
  margin: 1rem 0;
`;

const Date = styled.p`
  margin: 1rem 0;
`;

const PhotoCard = () => {
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
    <>
      {/* <DateButtons setPhotoDate={setPhotoDate} /> */}
      <Card>
        <Row>
          <Calendar photoDate={photoDate} setPhotoDate={setPhotoDate} />
          <Photo src={photo} alt={title} />
        </Row>
        <Content>
          <Title>{title}</Title>
          <Date className="photo-date">{photoDate}</Date>
          <p className="photo-desc">{description}</p>
        </Content>
      </Card>
    </>
  );
};

export default PhotoCard;
