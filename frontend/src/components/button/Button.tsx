import { useRef, useEffect } from 'react'
import './button.css'

export function ButtonAction() {

    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        setTimeout(() => {
            buttonRef.current?.classList.remove('hover-state')
        }, 1500)
    }, [])

    return (
        <div className='button-container'>
            <button ref={buttonRef} className="animated-button hover-state" type='button'>
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
                <span className="text">Get FREE version</span>
                <span className="circle"></span>
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
            </button>
        </div>
    )
}