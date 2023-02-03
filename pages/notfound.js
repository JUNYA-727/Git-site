/** @format */

import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Notfound() {
  /*      <Image
        src={"https://junya-727.github.io/blog/_A6A5059.jpg"}
        width={100}
        height={100}
        alt=""
      ></Image>*/
  return (
    <div
      style={{
        backgroundColor: "#222222",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div
        className="fadeup-logo"
        style={{
          color: "white",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h1>Coming soon...</h1>
      </div>
    </div>
  );
}
