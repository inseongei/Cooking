import React from "react";
import styled from "styled-components";
import shopping from "../asset/shopping.png";

export default function MainItem3() {
  return (
    <Container>
      <div className="wrapper">
        <div className="text-box">
          <h1 className="title">요리에 빠진 당신을 위한 쇼핑 천국, 쿡 쇼핑!</h1>
          <p>당신의 주방을 더 특별하게 만들어줄 요리 도구를 찾아보세요 </p>
        </div>

        <div className="image-box">
          <img src={shopping} alt="사진" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #efccef;
  cursor: pointer;
  display: flex;
  justify-content: center;

  .wrapper {
    width: 80%;
    padding: 30px;
    display: flex;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 50%;
  }

  .text-box p {
    font-family: "BMJUA";
    font-size: 1.3rem;
  }

  .image-box {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-box img {
    width: 90%;
    height: 90%;
  }

  .title {
    font-family: "BMJUA";
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;
