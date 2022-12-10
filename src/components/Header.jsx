import React from "react"
import logo from "../assets/logo.svg"

import { useGlobalContext } from "../context"

const Header = () => {
  const { score } = useGlobalContext()
  return (
    <section className="border-headerOutline border-4 rounded">
      <div className="h-full flex justify-between items-center p-4">
        <div>
          <img src={logo} className="w-24" alt="" />
        </div>
        <div className="bg-white w-24 h-20 rounded flex items-center justify-center">
          <div className="my-auto space-y-0 text-center">
            <h3 className="text-scoreText text-xs font-barlow font-bold tracking-widest">
              SCORE
            </h3>
            <h1 className="text-darkText text-4xl font-barlow font-extrabold">
              {score}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
