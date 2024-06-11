import { useRef, useEffect, useContext } from 'react'
import { PaymentContext } from '../../contexts/payments'
import { JAVASCRIPT_PRODUCTS } from '../../data/products'
import './button.css'

export function ButtonAction() {

    const buttonRef = useRef<HTMLButtonElement>(null)

    const { updateOpenPayment, updateCurrentProduct } = useContext(PaymentContext)
    
    const handleOpenPayment = () => {
        updateOpenPayment(true)
        updateCurrentProduct(JAVASCRIPT_PRODUCTS[0])
    }

    useEffect(() => {
        setTimeout(() => {
            buttonRef.current?.classList.add('hover-state')
        }, 1000)
    }, [])

    return (
        <div className='button-container'>
            <button 
                ref={buttonRef} 
                onClick={() => handleOpenPayment()}
                type='button'
                className="animated-button" 
            >
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
                <span className="text">Get BASIC version</span>
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