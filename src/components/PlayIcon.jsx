import React, { useEffect } from "react"

import { useGlobalContext } from "../context"

const PlayIcon = ({ icon, coordinates, gradient, goToPhase, entranceMode }) => {
  const { phase, setIsEntranceMode } = useGlobalContext()

  useEffect(() => {
    let timeout = null
    if (entranceMode && phase === "two") {
      timeout = setTimeout(() => {
        setIsEntranceMode(false)
      }, 1000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [phase])
  return (
    <div
      className={`absolute ${coordinates} w-28 h-28 bg-white rounded-full flex justify-center items-center 
      ${entranceMode ? "" : "shadow-[inset_0_-0.4rem_rgba(0,0,0,0.2)]"} 
      ${entranceMode ? "opacity-0" : "bg-gradient-to-b opacity-100"} 
      ${gradient}  transition-all duration-500`}
      onClick={goToPhase}
    >
      <div
        className={`bg-white w-[5.5rem] h-[5.5rem] flex justify-center items-center rounded-full transition-all duration-500 
        ${entranceMode ? "" : "shadow-[inset_0rem_0.4rem_rgba(0,0,0,0.2)]"}`}
      >
        <img
          src={icon}
          alt=""
          className={`w-11 ${
            entranceMode ? "opacity-0" : "opacity-100"
          } transition-all`}
        />
      </div>
    </div>
  )
}

export default PlayIcon
