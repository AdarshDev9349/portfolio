import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import image from "./images/character.svg";
function TimelinePath() {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  const pathLengthFirst = useTransform(scrollYProgress, [0.5, 1], [0, 10000]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height="240"
      fill="none"
      viewBox="0 0 1891 240"
      style={{ position: "absolute" }}
    >
      <path
        stroke="url(#paint0_linear_351_40)"
        strokeDasharray="10.71 10.71"
        strokeWidth="5.357"
        d="M1.345 237.073L399.597 52.619m0 0l367.111 144.928M399.597 52.619v184.454m367.111-39.526L1128.43 52.619M766.708 197.547V.517m361.722 52.102l361.72 144.928M1128.43 52.619v184.454m361.72-39.526L1889 22.675m-398.85 174.872V.517"
      ></path>
      <defs>
        <motion.linearGradient
          id="paint0_linear_351_40"
          x1="0"
          y1="118.795"
          y2="118.795"
          initial={{
            x2: "0",
          }}
          style={{
            x2: pathLengthFirst,
          }}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0D07"></stop>
          <stop offset="0.202" stopColor="#FF0359"></stop>
          <stop offset="0.241" stopColor="#737373"></stop>
          <stop offset="1" stopColor="#737373"></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
}
const Timeline = () => {
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
        <div
          className="time-line"
          style={{ position: "sticky", top: "30%", height: "100vh" }}
        >
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
              top: "5%",
              left: "19%",
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
            style={{ top: "20%", left: "39%", background: hrColor2 }}
          >
            2
          </motion.div>
          <motion.p
            className="text"
            style={{
              top: "0%",
              left: "35%",
              color: textColor2,
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </motion.p>
          <motion.div
            className="box"
            style={{ top: "5%", left: "58%", background: hrColor3 }}
          >
            3
          </motion.div>
          <motion.p
            className="text"
            style={{
              position: "absolue",
              top: "25%",
              left: "55%",
              color: textColor3,
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </motion.p>
          <motion.div
            className="box"
            style={{ top: "20%", left: "77%", background: hrColor4 }}
          >
            4
          </motion.div>
          <motion.p
            className="text"
            style={{
              position: "absolue",
              top: "0%",
              left: "73%",
              color: textColor4,
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
