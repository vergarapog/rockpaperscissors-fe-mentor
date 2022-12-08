import React from "react"
import logo from "../assets/logo.svg"

const Header = () => {
  return (
    <section className="border-gray-400 border-4 rounded">
      <div className="h-full flex justify-between items-center p-5">
        <div>
          <img src={logo} className="w-24" alt="" />
        </div>
        <div className="bg-white w-24">
          <h2>Score</h2>
        </div>
      </div>
    </section>
  )
}

export default Header
