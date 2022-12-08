import React from "react"
import logo from "../assets/logo.svg"

const Header = () => {
  return (
    <section className="border-gray-400 border-4 rounded">
      <div className="h-full flex justify-between items-center p-4">
        <div>
          <img src={logo} className="w-24" alt="" />
        </div>
        <div className="bg-white w-24 h-20 rounded flex items-center justify-center">
          <div className="my-auto space-y-0 text-center">
            <h3 className="text-xs font-barlow">Score</h3>
            <h1 className="text-3xl">12</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
