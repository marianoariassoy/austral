import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const changeColor = (data: string) => {
  gsap.registerPlugin(ScrollTrigger)
  const header = document.querySelector('.header-col-2')

  const outside = () => {
    header?.classList.remove('text-primary')
  }
  const inside = () => {
    header?.classList.add('text-primary')
  }

  ScrollTrigger.create({
    trigger: data,
    start: 'top top-=-80',
    end: 'bottom top-=-80',
    onEnter: () => {
      inside()
    },
    onLeave: () => {
      outside()
    },
    onEnterBack: () => {
      inside()
    },
    onLeaveBack: () => {
      outside()
    },
    markers: false
  })
}
