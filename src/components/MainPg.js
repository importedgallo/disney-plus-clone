import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

function MainPg() {
  let settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 4,
    slidesPerRow: 4,
  };

  return (
    <Container>
      <Carousel {...settings}>
        <Wrap>
          <img src="/images/viewers-disney.png"></img>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png"></img>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png"></img>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png"></img>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png"></img>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png"></img>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png"></img>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-disney.png"></img>
        </Wrap>
      </Carousel>
    </Container>
  );
}

export default MainPg;

const Container = styled.div`
  height: 100%;
  width: 100%;


`;
const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    height: 100%;
    right-width: 20px;
    z-index: 2;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    transition-duration: 300ms;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 0px -10px;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
