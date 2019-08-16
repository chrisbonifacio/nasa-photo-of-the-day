import React from "react";
import "./App.scss";
import PhotoCard from "./components/PhotoCard";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    width: 980px;
    margin: 2em auto;

    padding: 0;
  `;

  const Title = styled.h1`
    color: #fff;
    margin: 1rem 0;
    padding-left: 1.5rem;
  `;

  return (
    <Container>
      <Title>Photo of the Day</Title>
      <PhotoCard />
    </Container>
  );
}

export default App;
