import React from "react"
import styles from "../style"

import { useGlobalContext } from "../context"

import imageRules from "../assets/image-rules.svg"
import iconClose from "../assets/icon-close.svg"

const RuleDisplay = () => {
  const { setisRulesOpen } = useGlobalContext()

  return (
    <div className="absolute bg-white h-screen w-full z-40">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div
          className={`${styles.boxWidth} h-screen ${styles.paddingY} grid grid-rows-[1fr_4fr_1fr] gap-12`}
        >
          <div className="flex justify-center items-center font-barlow text-4xl tracking-widest text-darkText">
            RULES
          </div>
          <div className={`${styles.flexCenter}`}>
            <img src={imageRules} alt="" />
          </div>
          <div className="flex justify-center items-center font-barlow text-4xl">
            <img
              src={iconClose}
              className="w-8 h-8"
              alt=""
              onClick={() => setisRulesOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RuleDisplay
