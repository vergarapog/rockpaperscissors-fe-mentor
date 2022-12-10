import React from "react"

const PlayIcon = ({ icon, coordinates, gradient }) => {
  return (
    <div
      className={`absolute ${coordinates} w-28 h-28 bg-white bg-gradient-to-b ${gradient}  rounded-full flex justify-center items-center shadow-[inset_0_-0.3rem_rgba(0,0,0,0.2)]`}
    >
      <div className="bg-white w-[5.5rem] h-[5.5rem] flex justify-center items-center rounded-full shadow-[inset_0_0.3rem_rgba(0,0,0,0.2)]">
        <img src={icon} alt="" className="w-11" />
      </div>
    </div>
  )
}

export default PlayIcon
