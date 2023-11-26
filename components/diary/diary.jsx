import React from "react";
import { useMainContext } from "../context/ButtonContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from 'next/link';
const Diary = () => {
  const { checked } = useMainContext();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "20%", // Adjust this value as needed
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
    <>
      <div
        style={{
          width: "100svw",
          alignItems: "center",
          paddingTop: "1%",
          backgroundColor: `${checked ? "#f7f4f0" : "#222222"}`,
          paddingBottom: "10%",
        }}
      >
        <p
          style={{
            marginLeft: "5%",
            marginBottom: "0px",
            color: `${checked ? "black" : "#fff"}`,
          }}
          className="title"
        >
          News
        </p>
      </div>
      <div
        style={{
          width: "100vw",
          alignItems: "center",
          backgroundColor: `${checked ? "#f7f4f0" : "#222222"}`,
          paddingBottom: "100px",
          paddingLeft: "3%",
          paddingRight: "3%",
        }}
      >
        <div
          style={{
            color: `${checked ? "black" : "#fff"}`,
            textAlign: "center",
          }}
        >
          <Slider {...settings}>
          <Link href="https://junya-article.vercel.app/article/Notion">

<div>
  <img
    id="avatar"
    src="/notion.jpg"
    alt="Coming Soon"
    style={{ width: "200px", height: "200px" }}
  />
  <p>Notion APIを使ってブログサイトを作成したよ</p>
</div>

</Link>
            <Link href="/">

        <div>
          <img
            id="avatar"
            src="/comingsoon.png"
            alt="Coming Soon"
            style={{ width: "200px", height: "200px" }}
          />
          <p>Coming Soon...</p>
        </div>

    </Link>
            <Link href="/">

        <div>
          <img
            id="avatar"
            src="/comingsoon.png"
            alt="Coming Soon"
            style={{ width: "200px", height: "200px" }}
          />
          <p>Coming Soon...</p>
        </div>

    </Link>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Diary;
