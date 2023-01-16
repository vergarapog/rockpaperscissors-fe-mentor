import iconPaper from "../assets/icon-paper.svg"
import iconRock from "../assets/icon-rock.svg"
import iconScissor from "../assets/icon-scissors.svg"

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

export { gameChoices, generateHouseChoice, determineIcon, determineWinner }
