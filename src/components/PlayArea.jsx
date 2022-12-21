import React, { useEffect, useState } from "react"

import bgTriangle from "../assets/bg-triangle.svg"
import iconPaper from "../assets/icon-paper.svg"
import iconRock from "../assets/icon-rock.svg"
import iconScissor from "../assets/icon-scissors.svg"

import PlayIcon from "./PlayIcon"

import { useGlobalContext } from "../context"

const gameChoices = {
  paper: {
    iconPath: iconPaper,
    gradient: "from-paperGradient1 to-paperGradient2",
  },
  rock: {
    iconPath: iconRock,
    gradient: "from-rockGradient1 to-rockGradient2",
  },
  scissors: {
    iconPath: iconScissor,
    gradient: "from-scissorsGradient1 to-scissorsGradient2",
  },
}

const generateHouseChoice = () => {
  const randomNum = Math.floor(Math.random() * 3)

  switch (randomNum) {
    case 0:
      return "paper"

    case 1:
      return "rock"

    case 2:
      return "scissor"
  }
}

const PlayArea = () => {
  const {
    phase,
    setPhase,
    isEntranceMode,
    setIsEntranceMode,
    playerChoice,
    setPlayerChoice,
    // houseChoice,
    // setHouseChoice,
  } = useGlobalContext()

  const goToPhaseOne = () => {
    setPhase((prev) => "one")
    setIsEntranceMode(true)
  }

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice)
    setPhase((prev) => "two")
    // setHouseChoice(generateHouseChoice())
  }

  let playerIconPath
  let playerIconGradient
  switch (playerChoice) {
    case "paper":
      playerIconPath = iconPaper
      playerIconGradient = gameChoices.paper.gradient
      break
    case "rock":
      playerIconPath = iconRock
      playerIconGradient = gameChoices.rock.gradient

      break
    case "scissor":
      playerIconPath = iconScissor
      playerIconGradient = gameChoices.scissors.gradient
      break
    default:
      playerIconPath = null
  }

  let houseIconPath
  let houseIconGradient

  let houseChoice = generateHouseChoice()
  switch (houseChoice) {
    case "paper":
      houseIconPath = iconPaper
      houseIconGradient = gameChoices.paper.gradient
      break
    case "rock":
      houseIconPath = iconRock
      houseIconGradient = gameChoices.rock.gradient
      break
    case "scissor":
      houseIconPath = iconScissor
      houseIconGradient = gameChoices.scissors.gradient
      break
    default:
      houseIconPath = null
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
          <div onClick={() => handlePlayerChoice("paper")}>
            <PlayIcon
              icon={iconPaper}
              coordinates="-top-7 -left-5"
              gradient={gameChoices.paper.gradient}
            />
          </div>

          <div onClick={() => handlePlayerChoice("rock")}>
            <PlayIcon
              icon={iconRock}
              coordinates="-bottom-7 left-1/2 -translate-x-1/2"
              gradient={gameChoices.rock.gradient}
            />
          </div>

          <div onClick={() => handlePlayerChoice("scissor")}>
            <PlayIcon
              icon={iconScissor}
              coordinates="-top-7 -right-5"
              gradient={gameChoices.scissors.gradient}
            />
          </div>
        </div>
      </div>

      <div
        className={`${
          phase === "two" ? "opacity-100" : "hidden"
        }  h-full flex justify-center items-center`}
      >
        <div className="relative w-64 h-52">
          <PlayIcon
            icon={playerIconPath}
            coordinates="-top-7 -left-5"
            gradient={playerIconGradient}
          />
          <PlayIcon
            icon={houseIconPath}
            coordinates="-top-7 -right-5"
            gradient={houseIconGradient}
            entranceMode={isEntranceMode}
          />
          <div className="absolute top-1/2 -left-2  text-white font-barlow uppercase tracking-widest">
            You picked
          </div>
          <div
            className={`absolute top-1/2 -right-9 text-white font-barlow uppercase tracking-widest ${
              isEntranceMode ? "opacity-0" : "opacity-100"
            } transition-all duration-200`}
          >
            The House picked
          </div>

          <div
            className={`absolute -bottom-32 left-1/2 -translate-x-1/2 space-y-4 text-white font-barlow uppercase tracking-wider ${
              isEntranceMode ? "opacity-0" : "opacity-100"
            } transition-all duration-[1500ms]`}
          >
            <div className="text-6xl whitespace-nowrap ">You win</div>
            <div
              className="w-full bg-white text-black text-center py-2 rounded"
              onClick={goToPhaseOne}
            >
              <p>Try again</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayArea
