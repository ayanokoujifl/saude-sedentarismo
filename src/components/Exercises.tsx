import {
  PersonSimpleRun,
  Barbell,
  Paperclip,
  HandPointing
} from 'phosphor-react'

export function Exercises() {
  return (
    <>
      <div className="w-screen mt-10" id="card-videos">
        <div className="flex flex-col justify-center items-center gap-4 mt-5 calistenia">
          <div className="flex items-center gap-2 ">
            <Barbell size={24} color="#155e75" weight="bold" />
            <h4 className="font-league tracking-wide text-2xl capitalize text-cyan-800">
              Calistenia
            </h4>
            <HandPointing
              size={14}
              color="#1f2e70"
              weight="bold"
              className="ml-[-8px]"
            />
          </div>
          <iframe
            width={300}
            height={200}
            src="https://www.youtube.com/embed/cLTEJqAqlYw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-lg bg-cyan-800 p-1 z-10 calistenia-video"
          ></iframe>

          <iframe
            width={300}
            height={200}
            src="https://www.youtube.com/embed/4Z0IE2G1bW8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-lg bg-cyan-800 p-1 z-10 calistenia-video"
          ></iframe>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 mt-5 caminhada">
          <div className="flex items-center gap-2 ">
            <PersonSimpleRun size={24} color="#155e75" />
            <h4 className="font-league tracking-wide text-2xl capitalize text-cyan-800 ">
              Caminhada
            </h4>
            <HandPointing
              size={14}
              color="#1f2e70"
              weight="bold"
              className="ml-[-8px]"
            />
          </div>
          <iframe
            width={300}
            height={200}
            src="https://www.youtube.com/embed/aw7UP5AwGtc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-lg bg-cyan-800 p-1 z-10 caminhada-video"
          ></iframe>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 mt-5 laboral">
          <div className="flex items-center gap-2 ">
            <Paperclip size={24} color="#155e75" weight="bold" />
            <h4 className="font-league tracking-wide text-2xl capitalize text-cyan-800">
              Ginástica laboral
            </h4>
            <HandPointing
              size={14}
              color="#1f2e70"
              weight="bold"
              className="ml-[-8px]"
            />
          </div>
          <iframe
            width={300}
            height={200}
            src="https://www.youtube.com/embed/CsWRNAJytcY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-lg bg-cyan-800 p-1 z-10 laboral-video"
          ></iframe>
        </div>
      </div>
    </>
  )
}
