import { BsXSquareFill } from "react-icons/bs"
import { BiSolidPurchaseTag } from "react-icons/bi"
import { useRef, useContext, useEffect, FormEvent } from "react"
import { PaymentContext } from "../../contexts/payments"
import './payment.css'

export function PaymentPopUp() {

    const overlayRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    const { isOpenPayment, currentProduct, updateOpenPayment } = useContext(PaymentContext)
    const handleClose = () => updateOpenPayment(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const payerName = formData.get('name') as string
        const payerEmail = formData.get('email') as string

        try {
            const response = await fetch(`${import.meta.env.VITE_API_HOST_URL}/product/javascript/basic`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ payerName, payerEmail })
            })
            const data = await response.json()
            if(data.success) window.location.replace(data.url)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(isOpenPayment) {
            overlayRef?.current?.classList.add('open-payment')
            containerRef?.current?.classList.add('open-payment')
        } else {
            overlayRef?.current?.classList.remove('open-payment')
            containerRef?.current?.classList.remove('open-payment')
        }
    }, [isOpenPayment])

    return (
        <>
            <div ref={overlayRef} className="payment-overlay"></div>
            <div ref={containerRef} className="payment-container">
                <div className="payment-container-header">
                    <h4 className="payment-container-header-title">
                        Purchase card
                    </h4>
                    <span 
                        onClick={() => handleClose()} 
                        className="payment-container-header-close"
                    >
                        <BsXSquareFill/>
                    </span>
                </div>
                <div className="payment-container-body">
                    <form onSubmit={handleSubmit} className="payment-container-body-form">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="John Doe" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" required />
                        </div>
                        <button 
                            type="submit" 
                            className="payment-container-body-btn"
                        >
                            Get package
                        </button>
                    </form>
                    <div className="payment-container-body-product">
                        <p>{currentProduct.name} version software</p>
                        <span>
                            <BiSolidPurchaseTag/>
                        </span>
                        <p>$ {currentProduct.price}</p>
                    </div>
                </div>
            </div>
            {/* <div className="details-container">
                <ul>
                    <li>
                        <p>Feat: Brage-Express Template Generator</p>
                        <p>Restrictions: Only Express-Mysql template available</p>
                    </li>
                    <li>
                        <p>Feat: Express Routes Generator</p>
                        <p>Restrictions: Only 2 routes available</p>
                        <p>Restrictions: Only 1 subroutes available per route</p>
                    </li>
                </ul>
            </div> */}
        </>
    )
}