import { Header } from './components/Header'
import lineTopRight from './assets/LineTopRight.svg'
import lineDownLeft from './assets/lineDownLeft.svg'
import { Exercises } from './components/Exercises'
import { visibility } from './ts/script'
import { Footer } from './components/Footer'

function App() {
  visibility()
  return (
    <>
      <div className="bg-cyan-100 min-h-screen max-h-screen overflow-hidden overflow-y-hidden">
        <img
          src={lineTopRight}
          alt="linha topo direita"
          className="absolute right-0"
        />
        <Header />
        <Exercises />
        <img src={lineDownLeft} alt="" className="absolute bottom-0 left-0" />
        <Footer />
      </div>
    </>
  )
}

export default App
