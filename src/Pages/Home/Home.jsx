import React, { useContext } from "react";
import "./Home.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/Harshal.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../../Components/FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import CodePen from "../../img/CodePen.png";
import { themeContext } from "../../Context/Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Home = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Home" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Harshal Ingole</span>
          <span>A full Web Stack Developer</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a
            href="https://github.com/Harshalingole"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshal-ingole-759a38226/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a
            href="https://codepen.io/Harshalingole"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={CodePen} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <div className="boy">
          <img src={boy} alt="" />
        </div>
        {/* animation */}

        <motion.div
          initial={{ top: "-4rem", left: "10rem" }}
          whileInView={{ top: "-4rem", left: "1rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "20%", top: "19rem" }}
          whileInView={{ left: "72%", top: "19rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="MERN" text2="Stack" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
