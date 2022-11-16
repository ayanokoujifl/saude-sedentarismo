interface Exercises {
  name: string
  videoId: {
    fisrtVideo: string
    secondVideo?: string
  }
}

export function Exercises(props: Exercises) {
  return (
    <>
      <div>
        <h4>{props.name}</h4>
        <video controls>
          <source src="" />
        </video>
      </div>
    </>
  )
}
