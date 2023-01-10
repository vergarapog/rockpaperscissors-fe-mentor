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

const determineIcon = (choice) => {
  let path
  let gradient
  switch (choice) {
    case "paper":
      path = iconPaper
      gradient = gameChoices.paper.gradient
      break
    case "rock":
      path = iconRock
      gradient = gameChoices.rock.gradient

      break
    case "scissor":
      path = iconScissor
      gradient = gameChoices.scissors.gradient
      break
    default:
      path = null
  }

  return { path, gradient }
}

const determineWinner = (playerChoice, houseChoice) => {
  if (playerChoice === houseChoice) {
    return "tie"
  }

  switch (playerChoice) {
    case "paper":
      if (houseChoice === "rock") {
        return "player"
      } else if (houseChoice === "scissor") {
        return "house"
      }

    case "rock":
      if (houseChoice === "paper") {
        return "house"
      } else if (houseChoice === "scissor") {
        return "player"
      }

    case "scissor":
      if (houseChoice === "rock") {
        return "house"
      } else if (houseChoice === "paper") {
        return "player"
      }
  }
}

const PlayArea = () => {
  const {
    score,
    setScore,
    phase,
    setPhase,
    isEntranceMode,
    setIsEntranceMode,
    playerChoice,
    setPlayerChoice,
    houseChoice,
    setHouseChoice,
  } = useGlobalContext()

  const goToPhaseOne = () => {
    setPhase((prev) => "one")
    setIsEntranceMode(true)
  }

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice)
    setPhase((prev) => "two")
    setHouseChoice(generateHouseChoice())
  }

  const playerIcon = determineIcon(playerChoice)
  const houseIcon = determineIcon(houseChoice)
  const winner = determineWinner(playerChoice, houseChoice)

  useEffect(() => {
    if (phase === "two") {
      if (winner === "player") {
        setScore(score + 1)
      } else if (winner === "house") {
        if (score === 0) {
          setScore(0)
        } else {
          setScore(score - 1)
        }
      }
    }
  }, [phase])

  let announcementText
  if (winner === "tie") {
    announcementText = "Draw"
  } else {
    announcementText = winner === "player" ? "You Win" : "You Lose"
  }

  return (
    <section className="relative">
      <div
        className={`${
          phase === "one" ? "opacity-100" : "hidden"
        }  h-full flex justify-center items-center transition`}
      >
        <div className="relative">
          <img src={bgTriangle} className="w-56 lg:w-80" />
          <div onClick={() => handlePlayerChoice("paper")}>
            <PlayIcon
              icon={iconPaper}
              coordinates="-top-7 lg:-top-14 -left-5 lg:-left-12"
              gradient={gameChoices.paper.gradient}
            />
          </div>

          <div onClick={() => handlePlayerChoice("rock")}>
            <PlayIcon
              icon={iconRock}
              coordinates="-bottom-7 lg:-bottom-14 left-1/2 -translate-x-1/2"
              gradient={gameChoices.rock.gradient}
            />
          </div>

          <div onClick={() => handlePlayerChoice("scissor")}>
            <PlayIcon
              icon={iconScissor}
              coordinates="-top-7 lg:-top-14 -right-5 lg:-right-12"
              gradient={gameChoices.scissors.gradient}
            />
          </div>
        </div>
      </div>

      {/*//////// PHASE 2 ui code  ////////*/}
      <div
        className={`${
          phase === "two" ? "opacity-100" : "hidden"
        }  h-full flex justify-center items-center`}
      >
        <div className="relative w-64 lg:w-[550px] h-52">
          <PlayIcon
            icon={playerIcon.path}
            coordinates={`${
              isEntranceMode
                ? "-top-7 -left-5"
                : "-top-7 -left-5 lg:-top-7 lg:-left-36"
            }`}
            gradient={playerIcon.gradient}
            entranceMode={isEntranceMode}
            isPlayer={true}
          />
          <PlayIcon
            icon={houseIcon.path}
            coordinates={`${
              isEntranceMode
                ? "-top-7 -left-5"
                : "-top-7 -right-5 lg:-top-7 lg:-right-36"
            }`}
            gradient={houseIcon.gradient}
            entranceMode={isEntranceMode}
          />
          <div className="absolute top-1/2 lg:-top-1/2 -left-2  text-white font-barlow lg:text-2xl uppercase tracking-widest">
            You picked
          </div>
          <div
            className={`absolute top-1/2 lg:-top-1/2 -right-9 text-white font-barlow lg:text-2xl uppercase tracking-widest ${
              isEntranceMode ? "opacity-0" : "opacity-100"
            } transition-all duration-200`}
          >
            The House picked
          </div>

          <div
            className={`absolute -bottom-32 left-1/2 -translate-x-1/2 space-y-4 text-white font-barlow uppercase tracking-wider ${
              isEntranceMode ? "opacity-0" : "opacity-100 lg:top-7"
            } transition-all duration-[1500ms]`}
          >
            <div className="text-6xl whitespace-nowrap ">
              {announcementText}
            </div>
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
