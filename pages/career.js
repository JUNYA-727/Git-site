/** @format */

import Image from "next/image";

import { Link as Scroll } from "react-scroll";
import { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import { useInView } from "react-intersection-observer";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";

export default function Notfound() {
  const [send, setSend] = useState(false);

  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
  };
  const [ref1, inview1] = useInView({
    rootMargin: "-1px",
  });
  function creartext() {
    const textform1 = document.getElementById("name");
    const textform2 = document.getElementById("email");
    const textform3 = document.getElementById("message");
    textform1.value = "";
    textform2.value = "";
    textform3.value = "";
    setSend(true);
  }
  //https://junya-727.github.io/blog
  return (
    <div
      id="main"
      style={{
        width: "100svw",
        alignItems: "center",
        backgroundColor: "f5f3f5",
        paddingTop: "0px",
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
        {(() => {
          if (inview1) {
            return (
              <ArrowCircleUpIcon
                className="fadeup-overall"
                style={{ fontSize: "40px", color: "#f7f7f7", zIndex: "100" }}
              ></ArrowCircleUpIcon>
            );
          } else {
            return (
              <ArrowCircleUpIcon
                style={{ fontSize: "40px", color: "#576ca8", zIndex: "100" }}
              ></ArrowCircleUpIcon>
            );
          }
        })()}
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
                <p style={{ margin: "0px" }}>
                  大学でプログラミングを初めて触る。
                </p>
                <Image
                  src={"https://junya-727.github.io/Git-site/b0581.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>

            <li class="timeline-list-item">
              <div class="date">2020年11月</div>
              <div class="content">
                <p style={{ margin: "0px" }}>Pythonでの開発を始める。</p>
                <Image
                  src={"https://junya-727.github.io/Git-site/g08100.png"}
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
                  機械学習を用いたビットコイン自動取引botを作成して運用する。
                </p>
                <Image
                  src={"https://junya-727.github.io/Git-site/y1206.png"}
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
                  src={"https://junya-727.github.io/Git-site/r0191.png"}
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
                  楽天株式会社にて1ヶ月のエンジニアとして実務インターン。楽天ペイの開発。
                </p>
                <Image
                  src={"https://junya-727.github.io/Git-site/n0004.png"}
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
                  src={"https://junya-727.github.io/Git-site/g0703.png"}
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
                  src={"https://junya-727.github.io/Git-site/y0537.png"}
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
                  src={"https://junya-727.github.io/Git-site/b1025.png"}
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
                delay: 2000,
                disableOnInteraction: false,
              }}
              p
              speed={2000}
            >
              <SwiperSlide>
                <img
                  id="avatar"
                  src="https://junya-727.github.io/Git-site/B89ECA17-FFF1-46F1-84B4-79E68AAFFBE7.jpg"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  id="avatar"
                  src="https://junya-727.github.io/Git-site/1BF2FD85-F7C5-4D2E-9290-0F5DB18987BF.jpg"
                ></img>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  id="avatar"
                  src="https://junya-727.github.io/Git-site/41B5B789-BD88-4BE6-B4BE-928A574AE9A5.jpg"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  id="avatar"
                  src="https://junya-727.github.io/Git-site/IMG_0912.jpg"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  id="avatar"
                  src="https://junya-727.github.io/Git-site/DBE7A78B-A5DB-4A74-82DF-6B5C2FC22F84.jpg"
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>
          <div id="bio">
            <p style={{ margin: "5px" }} className="font-theme">
              Pythonでは機械学習が好きで、TensorFlowを使います。
            </p>
            <p style={{ margin: "5px" }} className="font-theme">
              少しならReact,Next.jsが書けます。
            </p>
            <p style={{ margin: "5px" }} className="font-theme">
              今年はKaggle入賞とAWS SAA習得を目標。
            </p>
          </div>

          <div id="buttons">
            <Scroll to="bottom" smooth="true">
              <button>Follow</button>
            </Scroll>
            <Scroll to="contact" smooth="true">
              <button id="msg">Message</button>
            </Scroll>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "5%" }} id="contact">
        <p style={{ marginLeft: "5%" }} className="title">
          Contact
        </p>
        <div>
          <div className="Form" onSubmit={creartext}>
            <form onSubmit={registerUser} id="mail">
              <div class="Form-Item">
                <p class="Form-Item-Label">
                  <span class="Form-Item-Label-Required">必須</span>お名前
                </p>
                <input
                  type="text"
                  class="Form-Item-Input"
                  id="name"
                  name="name"
                  placeholder="例）山田太郎"
                  style={{ color: "#302b27" }}
                  required
                ></input>
              </div>
              <div className="Form-Item">
                <p class="Form-Item-Label">
                  <span class="Form-Item-Label-Required">必須</span>
                  メールアドレス
                </p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  class="Form-Item-Input"
                  style={{ color: "#302b27" }}
                  required
                />
              </div>
              <div className="Form-Item">
                <p class="Form-Item-Label isMsg">
                  <span class="Form-Item-Label-Required">必須</span>
                  お問い合わせ内容
                </p>
                <textarea
                  id="message"
                  name="message"
                  className="Form-Item-Textarea"
                  rows="3"
                  style={{ color: "#302b27" }}
                  required
                ></textarea>
              </div>
              <div className="Form-Item">
                {send ? (
                  <button className="Form-Btn" ref={ref1}>
                    <a>送信されました</a>
                  </button>
                ) : (
                  <button className="Form-Btn" ref={ref1}>
                    <a>送信する</a>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            position: "absolute",
            paddingTop: "30%",
            textAlign: "center",
            width: "100%",
            zindex: "100",
          }}
        >
          {inview1 && (
            <div className="fadeup-logo2">
              <IconButton
                variant="outlined"
                href="https://www.instagram.com/zerodivisionerror_/"
                style={{ paddingRight: "4%" }}
              >
                <InstagramIcon
                  fontSize="large"
                  style={{ color: "eb34d5", zIndex: "100" }}
                ></InstagramIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                href="https://github.com/JUNYA-727"
                style={{ paddingRight: "4%" }}
              >
                <GitHubIcon
                  fontSize="large"
                  style={{ color: "black", zIndex: "100" }}
                ></GitHubIcon>
              </IconButton>

              <IconButton
                variant="outlined"
                href="https://twitter.com/JUNY4_"
                style={{ paddingRight: "4%" }}
              >
                <TwitterIcon
                  fontSize="large"
                  style={{ color: "0099FF", zIndex: "100" }}
                ></TwitterIcon>
              </IconButton>
            </div>
          )}
          <p
            style={{
              width: "100%",
              textAlign: "center",
              color: "white",
              zIndex: "100",
              position: "absolute",
            }}
          >
            created by Junya Kuramochi
          </p>
        </div>

        <div id="bottom" className="sample"></div>
      </div>
    </div>
  );
}
