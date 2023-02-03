/** @format */

import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>hello</h1>
      <Image
        src={"https://junya-727.github.io/blog/_A6A5059.jpg"}
        width={100}
        height={100}
        alt=""
      ></Image>
    </div>
  );
}
