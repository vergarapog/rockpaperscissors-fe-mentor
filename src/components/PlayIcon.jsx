import React from "react"

const PlayIcon = ({ icon, coordinates, gradient, goToPhase, entranceMode }) => {
  return (
    <div
      className={`absolute ${coordinates} w-28 h-28 bg-white ${
        entranceMode ? "" : "bg-gradient-to-b"
      } ${gradient}  rounded-full flex justify-center items-center ${
        entranceMode ? "" : "shadow-[inset_0_-0.4rem_rgba(0,0,0,0.2)]"
      } transition-all duration-500`}
      onClick={goToPhase}
    >
      <div
        className={`bg-white w-[5.5rem] h-[5.5rem] flex justify-center items-center rounded-full ${
          entranceMode ? "" : "shadow-[inset_0rem_0.4rem_rgba(0,0,0,0.2)]"
        } transition-all duration-500`}
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
