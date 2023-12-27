import React from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MainItem1 from "../item/MainItem1";
import MainItem2 from "../item/MainItem2";
import MainItem3 from "../item/MainItem3";

export default function MainS() {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <MainItem1 />
        </SwiperSlide>
        <SwiperSlide>
          <MainItem2 />
        </SwiperSlide>
        <SwiperSlide>
          <MainItem3 />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  z-index: -1;
  margin: 0 auto;
  margin-top: 30px;

  .swiper {
    width: 75%;
    height: 100%;
    border-radius: 30px;
  }

  @media screen and (max-width: 520px) {
    height: 150px;
    .swiper {
      width: 90%;
      height: 100%;
      border-radius: 30px;
    }

    .swiper-button-prev {
      display: none;
    }

    .swiper-button-next {
      display: none;
    }
  }
`;
