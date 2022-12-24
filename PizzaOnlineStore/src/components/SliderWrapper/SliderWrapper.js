import { useState, useRef, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import style from './sliderWrapper.module.css'
import arrowLeft from '../../images/arrowLeft.svg'
import arrowRight from '../../images/arrowRight.svg'
import SlideOne from '../SlideOne/SlideOne'
import SlideTwo from '../SlideTwo/SlideTwo'
import SlideThree from '../SlideThree/SlideThree'

const SliderWrapper = () => {

    const sliderContainer = useRef()

    let [position, setPosition] = useState(0)
    let positionMaxWidth 

    const prevSlide = () => {
        positionMaxWidth =  sliderContainer.current.getBoundingClientRect().width
        setPosition(position += positionMaxWidth)
        sliderContainer.current.childNodes.forEach(item => item.style = `transform: translateX(${position}px);`)
    }

    const nextSlide = () => {
        positionMaxWidth =  sliderContainer.current.getBoundingClientRect().width
        setPosition(position -= positionMaxWidth)
        sliderContainer.current.childNodes.forEach(item => item.style = `transform: translateX(${position}px);`)
    }

    window.addEventListener('resize', () => {
        if (sliderContainer.current) {
            setPosition(0)
            sliderContainer.current.childNodes.forEach(item => item.style = `transform: translateX(${position}px);`)
        }
    })
    
    return (
        <div className={style.sliderWrapper}>
            <div className={style.sliderContainer} ref={sliderContainer}>
                <SlideOne />
                <SlideTwo />
                <SlideThree />
            </div>
            <AnimatePresence>
            {position != 0 && 
            <motion.img src={arrowLeft} className={style.arrImgLeft} onClick={prevSlide} initial={{x: -20}} animate={{x: 0, opacity: 1}} exit={{opacity: 0}} />}
            </AnimatePresence>
            <AnimatePresence>
            {(position == 0 && <motion.img src={arrowRight} className={style.arrImgRight} onClick={nextSlide} initial={{x: 20}} animate={{x: 0}} exit={{opacity: 0}}/>) || ((sliderContainer.current.childNodes.length -1) * sliderContainer.current.getBoundingClientRect().width > -position  && 
            <motion.img src={arrowRight} className={style.arrImgRight} onClick={nextSlide} initial={{x: 20}} animate={{x: 0}} exit={{opacity: 0}}/>)} 
            </AnimatePresence>
        </div>
    )
}

export default SliderWrapper