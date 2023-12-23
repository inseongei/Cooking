import React from "react";
import styled from "styled-components";

export default function CookCard() {
  return (
    <Container>
      <div className="flip">
        <div className="card">
          <div className="front">
            <h1>사진</h1>
          </div>
          <div className="back">
            <h1>설명</h1>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 70%;
  width: 30%;
  background-color: #fff;

  cursor: pointer;
  margin: 0 15px;

  .flip {
    width: 100%;
    height: 100%;
    position: relative;
    perspective: 1100px;
    will-change: auto;
  }

  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: 1.2s;
    transform-style: preserve-3d;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 20px;
  }

  .front {
    background: tomato;
  }

  .back {
    background: royalblue;
    transform: rotateY(180deg);
  }

  :hover .card {
    transform: rotateY(180deg);
  }
`;
