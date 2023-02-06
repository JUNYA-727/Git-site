/** @format */

import Image from "next/image";

import { Link as Scroll } from "react-scroll";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
export default function Notfound() {
  return (
    <div
      id="main"
      style={{
        width: "100svw",
        alignItems: "center",
        backgroundColor: "f5f3f5",
        paddingTop: "0px",
        paddingBottom: "20%",
      }}
      className="fadeup-overall"
    >
      <Scroll
        to="main"
        smooth="true"
        style={{
          position: "fixed",
          bottom: "4%",
          right: "10%",
          zIndex: "200",
        }}
      >
        <ArrowCircleUpIcon
          style={{ fontSize: "40px", color: "#576ca8" }}
        ></ArrowCircleUpIcon>
      </Scroll>

      <div style={{ paddingTop: "5%" }}>
        <p style={{ marginLeft: "5%" }} className="title">
          Career
        </p>
        <div class="timeline">
          <ul class="timeline-list">
            <li class="timeline-list-item">
              <div class="date">2019年05月</div>
              <div class="content">
                <p style={{ margin: "0px" }}>大学でプログラミングを触る</p>
                <Image
                  //src={"https://junya-727.github.io/blog/b0581.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>

            <li class="timeline-list-item">
              <div class="date">2020年11月</div>
              <div class="content">
                <p style={{ margin: "0px" }}>
                  本格的にPythonでの開発を始める。
                </p>
                <Image
                  //src={"https://junya-727.github.io/blog/g08100.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>
            <li class="timeline-list-item">
              <div class="date">2021年09月</div>
              <div class="content">
                <p style={{ margin: "0px" }}>
                  ビットコインを自動取引するbotを作成して運用する。
                </p>
                <Image
                  //src={"https://junya-727.github.io/blog/y1206.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>
            <li class="timeline-list-item">
              <div class="date">2021年12月</div>
              <div class="content">
                <p style={{ margin: "0px" }}>
                  SIGNATEにおいて異常物体検出の精度を競う学生のコンペで入賞｡
                </p>
                <Image
                  // src={"https://junya-727.github.io/blog/r0191.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>
            <li class="timeline-list-item">
              <div class="date">2022年03月</div>
              <div class="content">
                <p style={{ margin: "0px" }}>
                  楽天株式会社にて1ヶ月のエンジニアとして実務インターン。
                </p>
                <Image
                  //src={"https://junya-727.github.io/blog/n0004.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>
            <li class="timeline-list-item">
              <div class="date">2022年04月</div>
              <div class="content">
                <p style={{ margin: "0px" }}>React,Next.jsの開発を始める｡</p>
                <Image
                  //  src={"https://junya-727.github.io/blog/g0703.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>

            <li class="timeline-list-item">
              <div class="date">2023年12月</div>
              <div class="content">
                <p style={{ margin: "0px" }}>Azure Fundamentals習得</p>
                <Image
                  //  src={"https://junya-727.github.io/blog/y0537.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>
            <li class="timeline-list-item">
              <div class="date">2023年06月</div>
              <div class="content">
                <p style={{ margin: "0px" }}>Accenture 入社</p>
                <Image
                  //   src={"https://junya-727.github.io/blog/b1025.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ paddingTop: "5%" }}>
        <p style={{ marginLeft: "5%" }} className="title">
          Profile
        </p>

        <div id="card" style={{ marginTop: "20%", marginBottom: "20%" }}>
          <h1>Junya Kuramochi</h1>
          <div class="image-crop">
            <Swiper
              modules={[Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              pagination={{
                clickable: false,
              }}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              p
              speed={300}
            >
              <SwiperSlide>
                <img
                  id="avatar"
                  src="https://junya-727.github.io/blog/B89ECA17-FFF1-46F1-84B4-79E68AAFFBE7.jpg"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  id="avatar"
                  src="https://junya-727.github.io/blog/1BF2FD85-F7C5-4D2E-9290-0F5DB18987BF.jpg"
                ></img>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  id="avatar"
                  src="https://junya-727.github.io/blog/41B5B789-BD88-4BE6-B4BE-928A574AE9A5.jpg"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  id="avatar"
                  src="https://junya-727.github.io/blog/IMG_0912.jpg"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  id="avatar"
                  src="https://junya-727.github.io/blog/DBE7A78B-A5DB-4A74-82DF-6B5C2FC22F84.jpg"
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>
          <div id="bio">
            <p style={{ margin: "5px" }}>
              Pythonでは機械学習分野が得意です、少しならReact,Next.jsが書けます。
            </p>
            <p style={{ margin: "5px" }}>Kaggle入賞とAWS SAA習得を目標。</p>
          </div>
          {
            //<div id="buttons"></div>
          }
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "10%",
              marginBottom: "10%",
            }}
          >
            <button style={{ textAlign: "center", margin: "auto" }}>
              <a href="https://junya-727.github.io/blog">Follow</a>
            </button>
          </div>
          {
            //<button id="msg">Message</button>
          }
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}
