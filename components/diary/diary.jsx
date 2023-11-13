import React from "react";
import { useMainContext } from "../context/ButtonContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Diary = () => {
  const { checked } = useMainContext();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "22%", // Adjust this value as needed
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{
        width: "100vw",
        alignItems: "center",
        backgroundColor: `${checked ? "#f7f4f0" : "#222222"}`,
        paddingBottom: "100px",
      }}
    >
      <p
        style={{
          marginLeft: "5%",
          backgroundColor: `${checked ? "#f7f4f0" : "#222222"}`,
          color: `${checked ? "black" : "#fff"}`,
          margin: 0,
          paddingBottom: "10%",
        }}
        className="title"
      >
        News
      </p>
      <div
        style={{
          width: "100vw",
          alignItems: "center",
          textAlign: "center",
          color: `${checked ? "#222222" : "#f7f4f0"}`,
        }}
      >
        <Slider {...settings}>
          <div style={{ width: "100%" }}>
            <img
              id="avatar"
              src="/comingsoon.png"
              alt="Coming Soon"
              style={{ width: "200px", height: "200px" }}
            />
            <p>Coming Soon...</p>
          </div>
          <div>
            <img
              id="avatar"
              src="/comingsoon.png"
              alt="Coming Soon"
              style={{ width: "200px", height: "200px" }}
            />
            <p>Coming Soon...</p>
          </div>
          <div>
            <img
              id="avatar"
              src="/comingsoon.png"
              alt="Coming Soon"
              style={{ width: "200px", height: "200px" }}
            />
            <p>Coming Soon...</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Diary;
