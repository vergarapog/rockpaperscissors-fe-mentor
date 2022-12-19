import React, { useState, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  //UI
  const [isRulesOpen, setisRulesOpen] = useState(false)
  const [isEntranceMode, setIsEntranceMode] = useState(true)

  //GAME
  const [score, setScore] = useState(0)
  const [phase, setPhase] = useState("one")
  const [playerChoice, setPlayerChoice] = useState({ choice: "", gradient: "" })

  return (
    <AppContext.Provider
      value={{
        isRulesOpen,
        setisRulesOpen,
        score,
        setScore,
        phase,
        setPhase,
        isEntranceMode,
        setIsEntranceMode,
        playerChoice,
        setPlayerChoice,
      }} // provide states to be provided to the app
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
