import { motion, stagger, useInView } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";
import InputRange from "./InputRange";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";
import AnimatedWord from "./AnimatedWord";

const Template = () => {
  const TextContainer = {
    transition: {
      delayChildren: 0.5,
    },
  };

  const defaultAnimation = {
    hidden: { opacity: 0.25, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Fragment>
      <div className="text-5xl">
        <p className="h-[100vh]">scroll</p>
        <AnimatedWord
          text="Lorem Ipsum
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          className="text-5xl"
          variants={defaultAnimation}
          stagger={0.1}
        />
        <hr className="mt-20 mb-10"></hr>
        <AnimatedText
          text="Lorem Ipsum
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          className="text-5xl"
          variants={defaultAnimation}
          stagger={null}
        />
        <p className="h-[100vh] flex items-end">Scroll up</p>
      </div>
    </Fragment>
  );
};

export default Template;
