import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image from "./images/character.svg";
function TimelinePath() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  const pathLengthFirst = useTransform(
    scrollYProgress,
    [0.35, 0.725],
    [0, 10000]
  );

  return (
    <svg
      width="600"
      height="813"
      viewBox="0 0 380 1900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M197.03 1913L197.03 1513.4M197.03 1513.4V1146.29M197.03 1513.4H379.5M197.03 1146.29L197.03 784.572M197.03 1146.29H0M197.03 784.572L197.03 422.851M197.03 784.572H379.5M197.03 422.851V0.5M197.03 422.851H0"
        stroke="url(#paint0_linear_344_39)"
        stroke-width="7.35657"
        stroke-dasharray="17.71 16.71"
      />
      <defs>
        <motion.linearGradient
          id="paint0_linear_344_39"
          x1="0"
          y1="118.795"
          y2="118.795"
          gradientUnits="userSpaceOnUse"
          initial={{
            x2: "0",
          }}
          style={{
            x2: pathLengthFirst,
          }}
        >
          <stop stop-color="#737373" />
          <stop offset="0.202" stopColor="#FF0359"></stop>
          <stop offset="0.241" stopColor="#737373"></stop>
          <stop offset="1" stop-color="#737373" />


        </motion.linearGradient>
      </defs>
    </svg>
  );
}
const Timelinesm = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const hrColor1 = useTransform(
    scrollYProgress,
    [0.25, 0.375],
    ["#1e1e1e", "#FF0000"]
  );
  const textColor1 = useTransform(
    scrollYProgress,
    [0.25, 0.375],
    ["#ffffff00", "#FFffffFF"]
  );
  const hrColor2 = useTransform(
    scrollYProgress,
    [0.375, 0.5],
    ["#1e1e1e", "#FF0000"]
  );
  const textColor2 = useTransform(
    scrollYProgress,
    [0.375, 0.5],
    ["#ffffff00", "#FFffffFF"]
  );
  const hrColor3 = useTransform(
    scrollYProgress,
    [0.5, 0.605],
    ["#1e1e1e", "#FF0000"]
  );
  const textColor3 = useTransform(
    scrollYProgress,
    [0.5, 0.605],
    ["#ffffff00", "#FFffffFF"]
  );
  const hrColor4 = useTransform(
    scrollYProgress,
    [0.605, 0.725],
    ["#1e1e1e", "#FF0000"]
  );
  const textColor4 = useTransform(
    scrollYProgress,
    [0.605, 0.725],
    ["#ffffff00", "#FFffffFF"]
  );
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div className="timelineContainer" style={{ position: "relative" }}>
        <h1
          style={{
            fontFamily: "bakbak one",
            fontWeight: "100",
            fontSize: "50px",
            color: "white",
            position: "relative",
            textAlign: "center",
            marginBottom: "130px",
          }}
        >
          Our Journey{" "}
        </h1>
        <div className="time-line" style={{ position: "sticky", top: "30%" }}>
          <img
            src={image}
            style={{
              position: "relative",
              zIndex: "4",
              top: "-100px",
              width: "180px",
            }}
            alt=""
          />
          <TimelinePath />
          <motion.div
            className="box"
            style={{
              position: "absolue",
              top: "19%",
              left: "27%",
              background: hrColor1,
            }}
          >
            1
          </motion.div>
          <motion.p
            className="text"
            style={{
              top: "25%",
              left: "15%",
              color: textColor1,
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </motion.p>
          <motion.div
            className="box"
            style={{ top: "38%", left: "65%", background: hrColor2 }}
          >
            2
          </motion.div>
          <motion.p
            className="text"
            style={{
              top: "44%",
              left: "55%",
              color: textColor2,
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </motion.p>
          <motion.div
            className="box"
            style={{ top: "57%", left: "27%", background: hrColor3 }}
          >
            3
          </motion.div>
          <motion.p
            className="text"
            style={{
              position: "absolue",
              top: "63%",
              left: "15%",
              color: textColor3,
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </motion.p>
          <motion.div
            className="box"
            style={{ top: "76%", left: "65%", background: hrColor4 }}
          >
            4
          </motion.div>
          <motion.p
            className="text"
            style={{
              position: "absolue",
              top: "82%",
              left: "55%",
              color: textColor4,
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Timelinesm;
