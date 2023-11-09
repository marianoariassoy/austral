import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Loader from './Loader'
import { Back, Forward } from '../icons/icons'

type SliderItemProps = {
  src: string
}

const SliderItem = ({ src }: SliderItemProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return (
    <div className='aspect-video lg:aspect-[16/6] flex items-center justify-center'>
      {isLoading ? (
        <Loader />
      ) : (
        <img
          src={src}
          className='fade-in h-full w-full object-cover object-center'
        />
      )}
    </div>
  )
}

type SliderComponentProps = {
  data: Array<{ id: number; image: string }>
}

const Slider = ({ data }: SliderComponentProps) => {
  const properties = {
    prevArrow: (
      <button className='text-primary ml-8 hover:-translate-x-0.5 transition-all back-button hidden lg:block'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='text-primary mr-8 hover:translate-x-0.5 transition-all forward-button hidden lg:block'>
        <Forward />
      </button>
    ),
    autoplay: false,
    transitionDuration: 400,
    indicators: true,
    arrows: true
  }

  type Image = {
    id: number
    image: string
  }

  return (
    <Slide {...properties}>
      {data &&
        data.map((image: Image) => (
          <SliderItem
            key={image.id}
            src={image.image}
          />
        ))}
    </Slide>
  )
}

export default Slider
