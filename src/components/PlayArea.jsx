import React, { useEffect, useState } from "react"

import bgTriangle from "../assets/bg-triangle.svg"
import iconPaper from "../assets/icon-paper.svg"
import iconRock from "../assets/icon-rock.svg"
import iconScissor from "../assets/icon-scissors.svg"

import PlayIcon from "./PlayIcon"

import { useGlobalContext } from "../context"

const PlayArea = () => {
  const {
    phase,
    setPhase,
    isEntranceMode,
    setIsEntranceMode,
    playerChoice,
    setPlayerChoice,
  } = useGlobalContext()

  const goToPhaseOne = () => {
    setPhase((prev) => "one")
    setIsEntranceMode(true)
  }

  const goToPhaseTwo = () => {
    setPhase((prev) => "two")
  }

  const handlePlayerChoice = (choice, gradient) => {
    setPlayerChoice({ choice, gradient })
  }

  let playerIconPath
  let playerIconGradient
  switch (playerChoice.choice) {
    case "paper":
      playerIconPath = iconPaper
      playerIconGradient = playerChoice.gradient
      break
    case "rock":
      playerIconPath = iconRock
      playerIconGradient = playerChoice.gradient

      break
    case "scissor":
      playerIconPath = iconScissor
      playerIconGradient = playerChoice.gradient
      break
    default:
      playerIconPath = null
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
          <div
            onClick={() =>
              handlePlayerChoice(
                "paper",
                "from-paperGradient1 to-paperGradient2"
              )
            }
          >
            <PlayIcon
              icon={iconPaper}
              coordinates="-top-7 -left-5"
              gradient="from-paperGradient1 to-paperGradient2"
              goToPhase={goToPhaseTwo}
            />
          </div>

          <div
            onClick={() =>
              handlePlayerChoice("rock", "from-rockGradient1 to-rockGradient2")
            }
          >
            <PlayIcon
              icon={iconRock}
              coordinates="-bottom-7 left-1/2 -translate-x-1/2"
              gradient="from-rockGradient1 to-rockGradient2"
              goToPhase={goToPhaseTwo}
            />
          </div>

          <div
            onClick={() =>
              handlePlayerChoice(
                "scissor",
                "from-scissorsGradient1 to-scissorsGradient2"
              )
            }
          >
            <PlayIcon
              icon={iconScissor}
              coordinates="-top-7 -right-5"
              gradient="from-scissorsGradient1 to-scissorsGradient2"
              goToPhase={goToPhaseTwo}
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          phase === "two" ? "opacity-100" : "hidden"
        }  h-full flex justify-center items-center`}
      >
        <div className="relative w-64 h-52 ">
          <PlayIcon
            icon={playerIconPath}
            coordinates="-top-7 -left-5"
            gradient={playerIconGradient}
            goToPhase={goToPhaseOne}
          />
          <PlayIcon
            icon={iconScissor}
            coordinates="-top-7 -right-5"
            gradient="from-scissorsGradient1 to-scissorsGradient2"
            goToPhase={goToPhaseOne}
            entranceMode={isEntranceMode}
          />
          <div className="absolute top-1/2 -left-2  text-white font-barlow uppercase tracking-widest">
            You picked
          </div>
          <div
            className={`absolute top-1/2 -right-9 text-white font-barlow uppercase tracking-widest ${
              isEntranceMode ? "opacity-0" : "opacity-100"
            } transition-all duration-700`}
          >
            The House picked
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayArea
