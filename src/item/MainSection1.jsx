import React from "react";
import styled from "styled-components";
import CookCard from "../components/CookCard";

export default function MainSection1() {
  return (
    <Container>
      <div className="Section">
        <div className="wrapper">
          <h1 className="title">최고의 레시피 TOP 3</h1>
          <div className="card-box">
            <CookCard />
            <CookCard />
            <CookCard />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  .Section {
    height: 100vh;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
  }

  .wrapper {
    width: 80%;
    height: 100%;
  }

  .title {
    font-size: 1.7rem;
    font-weight: 700;
    padding: 20px;
  }

  .card-box {
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
  }
`;
