/** @format */

import Image from "next/image";
import styles from "../styles/Home.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { IconButton } from "@mui/material";
import Notfound from "./notfound";
export default function Home() {
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
        style={{
          color: "white",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h2 className="fadeup-name">JUNYA KURAMOCHI</h2>
        <div className="fadeup-logo">
          <IconButton
            variant="outlined"
            href="https://www.instagram.com/zerodivisionerror_/"
          >
            <InstagramIcon
              fontSize="large"
              style={{ color: "purple" }}
            ></InstagramIcon>
          </IconButton>
          <IconButton variant="outlined" href="https://github.com/JUNYA-727">
            <GitHubIcon
              fontSize="large"
              style={{ color: "white" }}
            ></GitHubIcon>
          </IconButton>

          <IconButton variant="outlined" href="https://twitter.com/JUNY4_">
            <TwitterIcon
              fontSize="large"
              style={{ color: "0099FF" }}
            ></TwitterIcon>
          </IconButton>

          <IconButton variant="outlined" href="/notfound">
            <WebAssetIcon
              fontSize="large"
              style={{ color: "#33FF00" }}
            ></WebAssetIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}
