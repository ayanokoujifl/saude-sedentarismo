export function Exercises() {
  return (
    <>
      <div className="w-screen mt-10" id="card-videos">
        <div className="flex flex-col justify-center items-center gap-4 py-5">
          <h4 className="font-league tracking-wide text-2xl capitalize text-cyan-800 calistenia">
            Calistenia
          </h4>
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

        <div className="flex flex-col justify-center items-center gap-3 py-5">
          <h4 className="font-league tracking-wide text-2xl capitalize text-cyan-800 caminhada">
            Caminhada
          </h4>
          <iframe
            width={300}
            height={200}
            src="https://www.youtube.com/embed/aw7UP5AwGtc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-lg bg-cyan-800 p-1 z-10 caminhada-video"
          ></iframe>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 py-5">
          <h4 className="font-league tracking-wide text-2xl capitalize text-cyan-800 laboral">
            Ginástica laboral
          </h4>
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
