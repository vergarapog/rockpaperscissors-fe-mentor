import React from "react"

const PlayIcon = ({ icon, coordinates, gradient }) => {
  return (
    <div
      className={`absolute ${coordinates} w-28 h-28 bg-white bg-gradient-to-b ${gradient}  rounded-full flex justify-center items-center`}
    >
      <div className="bg-white w-[5.5rem] h-[5.5rem] flex justify-center items-center rounded-full">
        <img src={icon} alt="" className="w-11" />
      </div>
    </div>
  )
}

export default PlayIcon
