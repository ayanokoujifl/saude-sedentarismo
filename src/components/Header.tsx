import logo from '../assets/logotipo.png'

export function Header() {
  return (
    <>
      <div className="flex flex-1 items-center justify-center gap-10">
        <img src={logo} alt="logotipo" className="w-16" />
        <div className="flex flex-col items-center leading-none">
          <h1 className="z-10 font-league text-3xl text-cyan-800">
            Saúde é o que interessa
          </h1>
          <h6 className="text-cyan-700 text-[12px] z-10 font-medium">
            o resto não tem pressa
          </h6>
        </div>
      </div>
    </>
  )
}
