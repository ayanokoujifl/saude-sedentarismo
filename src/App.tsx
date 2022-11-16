import { Header } from './components/Header'
import lineTopRight from './assets/LineTopRight.svg'
import lineDownLeft from './assets/lineDownLeft.svg'

function App() {
  return (
    <>
      <div className="bg-cyan-100 min-h-screen">
        <img
          src={lineTopRight}
          alt="linha topo direita"
          className="absolute right-0"
        />
        <Header />

        <img src={lineDownLeft} alt="" className="absolute bottom-0 left-0" />
      </div>
    </>
  )
}

export default App
