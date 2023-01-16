import React from "react"
import { useGlobalContext } from "../context"

const Rules = () => {
  const { isRulesOpen, setisRulesOpen } = useGlobalContext()

  return (
    <section className="flex justify-center items-center lg:absolute lg:bottom-10 lg:right-14">
      <div
        className="border-gray-400 border-2 py-3 px-8 rounded-xl cursor-pointer"
        onClick={() => setisRulesOpen(true)}
      >
        <h1 className="text-white font-barlow font-semibold tracking-[0.2em]">
          RULES
        </h1>
      </div>
    </section>
  )
}

export default Rules
