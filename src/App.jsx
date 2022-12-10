import Header from "./components/Header"
import PlayArea from "./components/PlayArea"
import Rules from "./components/Rules"
import styles from "./style"

import { useGlobalContext } from "./context"

function App() {
  const { isRulesOpen } = useGlobalContext()

  if (isRulesOpen) {
    return <section className="w-full h-screen bg-white">test</section>
  }

  return (
    <div className="bg-gradient-radial from-bgGradientLeft to-bgGradientRight h-full">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div
          className={`${styles.boxWidth} h-screen ${styles.paddingY} grid grid-rows-[1fr_4fr_1fr] gap-12`}
        >
          <Header />
          <PlayArea />
          <Rules />
        </div>
      </div>
    </div>
  )
}

export default App
