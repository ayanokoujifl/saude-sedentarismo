import { InstagramLogo } from 'phosphor-react'

export function Footer() {
  return (
    <div className=" mt-16 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center absolute">
        <p className="text-slate-400">Videos não autorais</p>
        <h3 className="underline text-cyan-300">
          <a href="https://instagram.com/luis_gustavo_dev" target="_blank">
            Feito com amor por Luís Gustavo❤️
          </a>
        </h3>
      </div>
      <a
        href="https://www.instagram.com/saude.sedentarismo/"
        target="_blank"
        className="absolute bottom-4 flex gap-6"
      >
        <InstagramLogo size={24} color="#155e75" weight="bold" />
        <p className="text-cyan-800 font-extrabold">@saude.sedentarismo</p>
      </a>
    </div>
  )
}
