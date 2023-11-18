import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { Switchmode } from "../main/main";
import { useMainContext } from "../context/ButtonContext";
function Test() {
  const { checked } = useMainContext();
  return (
    <div
      style={{
        height: "500vh",
        backgroundColor: `${checked ? "#f7f4f0" : "#222222"}`,
      }}
    >
      <section id="sectionPin">
        <div
          class="pin-wrap-sticky"
          style={{ backgroundColor: `${checked ? "#f7f4f0" : "#222222"}` }}
        >
          <p
            style={{
              marginLeft: "5%",
              marginTop: "0px",
              marginBottom: "0px",
              color: `${checked ? "black" : "#fff"}`,
            }}
            className="title"
          >
            Career
          </p>
          <div class="pin-wrap">
            <div
              style={{
                width: "40%",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "3%",
              }}
            >
              <Image
                src="/B89ECA17-FFF1-46F1-84B4-79E68AAFFBE7.jpg"
                width={100}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt=""
              ></Image>
            </div>
            <div
              style={{
                width: "40%",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "3%",
              }}
            >
              <Image
                src="/IMG_2157.jpeg"
                width={200}
                w
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt=""
              ></Image>
            </div>
            <div
              style={{
                width: "40%",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "3%",
              }}
            >
              <Image
                src="/IMG_3214.jpeg"
                width={200}
                w
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt=""
              ></Image>
            </div>
            <div
              style={{
                width: "40%",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "3%",
              }}
            >
              <Image
                src="/IMG_0101.jpg"
                width={200}
                w
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Test;
