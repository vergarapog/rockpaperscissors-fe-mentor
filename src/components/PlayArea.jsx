import React from "react"

import bgTriangle from "../assets/bg-triangle.svg"
import iconPaper from "../assets/icon-paper.svg"
import iconRock from "../assets/icon-rock.svg"
import iconScissor from "../assets/icon-scissors.svg"

import PlayIcon from "./PlayIcon"

const PlayArea = () => {
  return (
    <section className="border-headerOutline border-4 rounded">
      <div className="h-full flex justify-center items-center">
        <div className="relative">
          <img src={bgTriangle} className="w-56" />
          <PlayIcon icon={iconPaper} coordinates="-top-7 -left-5" />
          <PlayIcon
            icon={iconRock}
            coordinates="-bottom-7 left-1/2 -translate-x-1/2"
          />
          <PlayIcon icon={iconScissor} coordinates="-top-7 -right-5" />
        </div>
      </div>
    </section>
  )
}

export default PlayArea
