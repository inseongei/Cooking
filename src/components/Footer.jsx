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
  }

  .logo {
    width: 200px;
    margin-top: 20px;
  }

  .main-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .sub-title {
    color: grey;
    margin-bottom: 15px;
  }

  .frontend-box {
    text-align: center;
  }

  .title {
    font-weight: 700;
    font-size: 1.2rem;
    margin: 30px 0px 15px 0px;
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
    margin-bottom: 15px;
  }

  .aws-box {
    text-align: center;
  }

  .made-box {
    text-align: center;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    height: 100%;
    justify-content: center;

    .box {
      padding: 20px 20px 10px 20px;
    }

    .logo {
      margin-bottom: 10px;
      width: 150px;
    }

    .sub-title {
      line-height: 1.5;
      font-size: 1rem;
    }

    .made-box {
      display: none;
    }
    .frontend-box {
      display: none;
    }
    .back-box {
      display: none;
    }
    .aws-box {
      display: none;
    }
    .main-box {
      width: 50%;
      white-space: nowrap;
    }
    .title {
      white-space: nowrap;
    }
  }
  @media screen and (max-width: 520px) {
  }
`;
