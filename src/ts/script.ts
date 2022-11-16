export const visibility = () => {
  const calisteniaVideo =
    document.querySelectorAll<HTMLElement>('.calistenia-video')
  const calistenia = document.querySelector('.calistenia')
  const caminhadaVideo =
    document.querySelectorAll<HTMLElement>('.caminhada-video')
  const caminhada = document.querySelector('.caminhada')
  const laboralVideo = document.querySelectorAll<HTMLElement>('.laboral-video')
  const laboral = document.querySelector('.laboral')

  window.addEventListener('load', () => {
    calisteniaVideo.forEach((video) => {
      video.style.display = 'none'
    })

    calistenia?.addEventListener('click', () => {
      calisteniaVideo.forEach((video) => {
        video.style.display = 'block'
      })
    }),
      calistenia?.addEventListener('mouseover', () => {
        calisteniaVideo.forEach((video) => {
          video.style.display = 'none'
        })
      })

    caminhadaVideo.forEach((video) => {
      video.style.display = 'none'
    })

    caminhada?.addEventListener('click', () => {
      caminhadaVideo.forEach((video) => {
        video.style.display = 'block'
      })
    })
    caminhada?.addEventListener('mouseover', () => {
      caminhadaVideo.forEach((video) => {
        video.style.display = 'none'
      })
    })

    laboralVideo.forEach((video) => {
      video.style.display = 'none'
    }),
      laboral?.addEventListener('mouseenter', () => {
        laboralVideo.forEach((video) => {
          video.style.display = 'block'
        })
      }),
      laboral?.addEventListener('mouseover', () => {
        laboralVideo.forEach((video) => {
          video.style.display = 'none'
        })
      })
  })
}
