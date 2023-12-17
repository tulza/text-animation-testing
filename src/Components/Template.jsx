import { motion, stagger, useInView } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";
import InputRange from "./InputRange";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import AnimatedText from "./AnimatedText";
import AnimatedWord from "./AnimatedWord";

const Template = () => {
  const [stagger, setStagger] = useState(250);

  const defaultAnimation = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  const xanim = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Fragment>
      <div className="text-5xl">
        <p className="h-[100vh] ">scroll</p>
        <AnimatedWord
          text="Lorem Ipsum
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          className="text-5xl overflow-hidden"
          variants={defaultAnimation}
          stagger={stagger / 1000}
        />
        <hr className="mt-20 mb-10"></hr>
        <AnimatedText
          text="Lorem Ipsum
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          className="text-5xl overflow-hidden"
          variants={defaultAnimation}
          stagger={stagger / 5000}
        />
        <InputRange
          className="flex gap-4 w-10"
          value={stagger}
          set={setStagger}
          min={10}
          max={1000}
        ></InputRange>
        <p className="h-[100vh] flex items-end">Scroll up</p>
      </div>
    </Fragment>
  );
};

export default Template;
