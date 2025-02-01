// import Lottie from 'lottie-react'
// import animationData from '../../assets/animationData.json'
import { Tabs } from '../tabs/Tabs'
import { ButtonAction } from '../button/Button'
// import image from '../../assets/brage-command-files-example.png'
import imageLogo from '/brain-gear.png'
import image from '../../assets/create-brage-command-files-example.png'
import './hero.css'

export function HeroSection() {
    return (
        <div id='hero-section' className='hero-section'>
            <div className='hero-container'>
                <nav className='hero-navbar'>
                    <a 
                        href="#hero-section" 
                        className='hero-navbar-title'
                    >
                        <img src={imageLogo} alt="Brage logo" />
                        BRAGE
                    </a>
                    <div className='hero-navbar-link'>
                        <a href="https://brage-docs.pages.dev" target='_blank'>
                            Docs
                        </a>
                        <a href="#feat-section">
                            Features
                        </a>
                        <a href="#price-section">
                            Products
                        </a>
                        <a href="#contact-section">
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
                        BRAGE stands for Backend Revolutionary Architecture Generation Engine
                    </p>
                    <Tabs/>
                    <ButtonAction/>
                </div>
                <div className="tv">
                    <img src={image} alt="" />
                </div>
                {/* <div className='animated-lottie'>
                    <Lottie animationData={animationData}/>
                </div> */}
            </div>
        </div>
    )
}