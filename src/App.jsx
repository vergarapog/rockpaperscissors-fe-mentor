import Header from "./components/Header"
import PlayArea from "./components/PlayArea"
import Rules from "./components/Rules"
import styles from "./style"

import { useGlobalContext } from "./context"
import RuleDisplay from "./components/RuleDisplay"

function App() {
  const { isRulesOpen } = useGlobalContext()

  return (
    <div>
      {isRulesOpen && <RuleDisplay />}
      <div className="bg-gradient-radial from-bgGradientLeft to-bgGradientRight h-full">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div
            className={`${styles.boxWidth} h-screen ${styles.paddingY} grid grid-rows-[1fr_4fr_1fr] gap-12`}
          >
            <div className="lg:flex lg:justify-center">
              <div className="w-full lg:max-w-2xl">
                <Header />
              </div>
            </div>
            <PlayArea />
            <Rules />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
