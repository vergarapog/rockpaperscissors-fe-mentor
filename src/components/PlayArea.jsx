import React, { useEffect, useState } from "react"

import bgTriangle from "../assets/bg-triangle.svg"
import iconPaper from "../assets/icon-paper.svg"
import iconRock from "../assets/icon-rock.svg"
import iconScissor from "../assets/icon-scissors.svg"

import PlayIcon from "./PlayIcon"

import { useGlobalContext } from "../context"

const PlayArea = () => {
  const {
    score,
    setScore,
    phase,
    setPhase,
    isEntranceMode,
    setIsEntranceMode,
  } = useGlobalContext()

  const goToPhaseOne = () => {
    setPhase((prev) => "one")
    setIsEntranceMode(true)
  }

  const goToPhaseTwo = () => {
    setPhase((prev) => "two")
  }

  return (
    <section className="relative">
      <div
        className={`${
          phase === "one" ? "opacity-100" : "hidden"
        }  h-full flex justify-center items-center transition`}
      >
        <div className="relative">
          <img src={bgTriangle} className="w-56" />
          <PlayIcon
            icon={iconPaper}
            coordinates="-top-7 -left-5"
            gradient="from-paperGradient1 to-paperGradient2"
            goToPhase={goToPhaseTwo}
          />
          <PlayIcon
            icon={iconRock}
            coordinates="-bottom-7 left-1/2 -translate-x-1/2"
            gradient="from-rockGradient1 to-rockGradient2"
            goToPhase={goToPhaseTwo}
          />
          <PlayIcon
            icon={iconScissor}
            coordinates="-top-7 -right-5"
            gradient="from-scissorsGradient1 to-scissorsGradient2"
            goToPhase={goToPhaseTwo}
          />
        </div>
      </div>

      <div
        className={`${
          phase === "two" ? "opacity-100" : "hidden"
        }  h-full flex justify-center items-center`}
      >
        <div className="relative w-64 h-52">
          <PlayIcon
            icon={iconPaper}
            coordinates="-top-7 -left-5"
            gradient="from-paperGradient1 to-paperGradient2"
            goToPhase={goToPhaseOne}
          />
          <PlayIcon
            icon={iconScissor}
            coordinates="-top-7 -right-5"
            gradient="from-scissorsGradient1 to-scissorsGradient2"
            goToPhase={goToPhaseOne}
            entranceMode={isEntranceMode}
          />
        </div>
      </div>
    </section>
  )
}

export default PlayArea
