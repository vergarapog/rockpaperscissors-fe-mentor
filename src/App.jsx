import Header from "./components/Header"
import PlayArea from "./components/PlayArea"
import styles from "./style"

function App() {
  return (
    <div className="bg-gradient-radial from-bgGradientLeft to-bgGradientRight h-full">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div
          className={`${styles.boxWidth} h-screen ${styles.paddingY} grid grid-rows-[1fr_4fr_1fr] gap-12`}
        >
          <Header />
          <PlayArea />
        </div>
      </div>
    </div>
  )
}

export default App
