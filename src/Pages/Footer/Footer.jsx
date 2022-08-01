import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Messenger from "@iconscout/react-unicons/icons/uil-facebook-messenger";
import Mail from "@iconscout/react-unicons/icons/uil-envelope";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>©2022 Harshal Ingole. All rights are reserved.</span>
        <div className="f-icons">
          <a
            href="https://api.whatsapp.com/send?phone=7507721344"
            target={"_blank"}
            rel="noreferrer"
          >
            <Whatsapp color="white" size={"3rem"} />
          </a>
          <a
            href="https://m.me/harshal.ingole.503"
            target={"_blank"}
            rel="noreferrer"
          >
            <Messenger color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/harshal-ingole-759a38226/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/Harshalingole"
            target={"_blank"}
            rel="noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="mailto:harshal.ingole21@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <Mail color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
