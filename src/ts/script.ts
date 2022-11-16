export const visibility = () => {
  window.addEventListener('load', () => {
    const div = document.querySelector('#card-video')
    const calisteniaVideo =
      document.querySelectorAll<HTMLElement>('.calistenia-video')
    const calistenia = document.querySelector('.calistenia')

    calisteniaVideo.forEach((video) => {
      video.style.display = 'none'
    })

    calistenia?.addEventListener('click', () => {
      calisteniaVideo.forEach((video) => {
        video.style.display = 'block'
      })
    })
    calistenia?.addEventListener('mouseover', () => {
      calisteniaVideo.forEach((video) => {
        video.style.display = 'none'
      })
    })

    const caminhadaVideo =
      document.querySelectorAll<HTMLElement>('.caminhada-video')
    const caminhada = document.querySelector('.caminhada')

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

    const laboralVideo =
      document.querySelectorAll<HTMLElement>('.laboral-video')
    const laboral = document.querySelector('.laboral')

    laboralVideo.forEach((video) => {
      video.style.display = 'none'
    })

    laboral?.addEventListener('click', () => {
      laboralVideo.forEach((video) => {
        video.style.display = 'block'
      })
    })
    laboral?.addEventListener('mouseover', () => {
      laboralVideo.forEach((video) => {
        video.style.display = 'none'
      })
    })
  })
}
