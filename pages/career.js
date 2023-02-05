/** @format */

import Image from "next/image";

import { Link as Scroll } from "react-scroll";

import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function Notfound() {
  /*      <Image
        src={"https://junya-727.github.io/blog/_A6A5059.jpg"}
        width={100}
        height={100}
        alt=""
      ></Image>*/

  return (
    <div
      id="main"
      style={{
        width: "100svw",
        height: "200svh",
        alignItems: "center",
        backgroundColor: "f5f3f5",
        paddingTop: "0px",
      }}
    >
      <div
        style={{ position: "fixed", bottom: "4%", right: "12%", zIndex: "200" }}
      >
        <Scroll to="main" smooth="true">
          <ArrowCircleUpIcon
            style={{ fontSize: "40px", color: "#576ca8" }}
          ></ArrowCircleUpIcon>
        </Scroll>
      </div>
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
                  src={"https://junya-727.github.io/blog/career/b0581.png"}
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
                  src={"https://junya-727.github.io/blog/career/g08100.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>
            <li class="timeline-list-item">
              <div class="date">2021年09月</div>
              <div class="content">
                ビットコインを自動取引するbotを作成して運用する。
                <p style={{ margin: "0px" }}>
                  本格的にPythonでの開発を始める。
                </p>
                <Image
                  src={"https://junya-727.github.io/blog/career/y1206.png"}
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
                  src={"https://junya-727.github.io/blog/career/r0191.png"}
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
                  src={"https://junya-727.github.io/blog/career/n0004.png"}
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
                  src={"https://junya-727.github.io/blog/career/g0703.png"}
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
                  src={"https://junya-727.github.io/blog/career/y0537.png"}
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
                  src={"https://junya-727.github.io/blog/career/b1025.png"}
                  width={200}
                  height={200}
                  alt=""
                ></Image>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
