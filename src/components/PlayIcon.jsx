import React from "react"

const PlayIcon = ({ icon, coordinates }) => {
  return (
    <div
      className={`absolute ${coordinates} w-28 h-28 bg-white border-blue-500 border-[10px] rounded-full flex justify-center items-center`}
    >
      <img src={icon} alt="" className="w-11" />
    </div>
  )
}

export default PlayIcon
