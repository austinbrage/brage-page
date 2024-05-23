import Lottie from 'lottie-react'
import animationData from '../../assets/animationData.json'
import { Accordion } from '../accordion/Accordion'
import { ActionBtn } from '../action/actionBtn'
// import { TbArrowBigRightLineFilled } from "react-icons/tb"
import './hero.css'

export function HeroSection() {
    return (
        <div className='hero-section'>
            <div className='hero-container'>
                <nav className='hero-navbar'>
                    <h1 className='hero-navbar-title'>
                        BRAGE
                    </h1>
                    <div className='hero-navbar-link'>
                        <a href="#">
                            Home
                        </a>
                        <a href="#">
                            Feature
                        </a>
                        <a href="#">
                            Pricing
                        </a>
                        <a href="#">
                            Support
                        </a>
                    </div>
                </nav>
                <div className='heading-container'>
                    <h2 className='heading-h1'>
                        <span className="wrapper-slice">
                            <div className="top">Stop</div>
                            <div className="bottom">Stop</div>
                        </span>
                        <span className="wrapper-slice">
                            <div className="top">creating</div>
                            <div className="bottom">creating</div>
                        </span>
                        <span className="wrapper-slice">
                            <div className="top">apis</div>
                            <div className="bottom">apis</div>
                        </span>
                        <span className="wrapper-slice">
                            <div className="top">manually</div>
                            <div className="bottom">manually</div>
                        </span>
                    </h2>
                </div>
                <div className='hero-description'>
                    <p className='hero-description-title'>
                        BRAGE stands for Backend Revolutionary Framework Generation Engine
                    </p>
                    <Accordion/>
                </div>
                <ActionBtn/>
                <div className='animated-lottie'>
                    <Lottie animationData={animationData}/>
                </div>
            </div>
        </div>
    )
}