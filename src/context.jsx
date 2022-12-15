import React, { useState, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isRulesOpen, setisRulesOpen] = useState(false)
  const [score, setScore] = useState(0)
  const [phase, setPhase] = useState("one")
  const [isEntranceMode, setIsEntranceMode] = useState(true)

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
