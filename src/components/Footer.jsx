import React from "react";
import styled from "styled-components";
import Logo from "../asset/Logo.png";

export default function Footer() {
  return (
    <Container>
      <div className="box main-box">
        <img src={Logo} alt="로고" className="logo" />
        <p className="sub-title">
          Copyright 2023. 맛남의공간 all rights reserved.
        </p>
      </div>
      <div className="box frontend-box">
        <h1 className="title">FRONTEND</h1>
        <div className="span-box">
          <span>React</span>
          <span>Recoil</span>
        </div>
      </div>
      <div className="box back-box">
        <h1 className="title">BACKEND</h1>
        <div className="span-box">
          <span>Spring Boot</span>
          <span>MySQL</span>
        </div>
      </div>
      <div className="box aws-box">
        <h1 className="title">AWS</h1>
        <div className="span-box">
          <span>EC2</span>
          <span>S3</span>
          <span>CloudFront</span>
        </div>
      </div>
      <div className="box made-box">
        <h1 className="title">MADE BY</h1>
        <div className="span-box">
          <span>김광현</span>
          <span>정인성</span>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 160px;
  background-color: rgb(229, 229, 229);
  display: flex;

  .box {
    width: 20%;
    height: 100%;
    padding: 20px;
  }

  .logo {
    width: 200px;
  }

  .main-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .sub-title {
    color: grey;
  }

  .frontend-box {
    text-align: center;
  }

  .title {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .span-box {
    display: flex;
    flex-direction: column;
    color: grey;
  }
  .back-box {
    text-align: center;
  }

  .span-box span {
    margin: 5px;
  }

  .aws-box {
    text-align: center;
  }

  .made-box {
    text-align: center;
  }
`;
