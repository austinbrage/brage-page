import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "./success.css"

type CofirmData = { 
    success: boolean
    message: string
    url?: string
}

export function SuccessPayment() {

    const location = useLocation()
    const [confirmData, setConfirmData] = useState<CofirmData>()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const paymentId = params.get('payment_id');
        console.log('paymentId', paymentId);

        (async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_HOST_URL}/product/payment/confirm?payment_id=${paymentId}`)
                const data = await response.json()
                setConfirmData(data)
            } catch(err) {
                console.error('Error on payment confirmation request', err)
            }
        })()
    }, [location])

    return (
        <div className="success-container">
            {confirmData?.success ? (
                <>
                    <div className="success-container-card">
                        <div className="message-box _success">
                            <span className="fa-check-circle">
                                <FaCheckCircle/>
                            </span>
                            {/* <h2>Your payment was successful</h2> */}
                            <h2>{confirmData?.message}</h2>
                            <p>Thank you for your payment. feel free <br/> to contact us with any issue you encounter</p>      
                        </div>
                    </div>
                    <div className="download-container">
                        <p>To start the download of your package, hit this button</p>
                        <a href={confirmData?.url} target="_blank">
                            <svg
                                viewBox="0 0 256 256"
                                height="32"
                                width="38"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </>
            ) : (
                <div className="failure-container-card">
                    <div className="message-box _failed">
                        <span className="fa-check-circle">
                            <FaTimesCircle/>
                        </span>
                        {/* <h2>Your payment failed</h2> */}
                        <h2>{confirmData?.message}</h2>
                        <p>Try again later <strong>CONTACT ME to solve this issue</strong></p> 
                    </div> 
                </div> 
            )}
            <div className="contact-container">
                <div className="screen">
                    <div className="screen-header">
                        <div className="screen-header-left">
                            <div className="screen-header-button close"></div>
                            <div className="screen-header-button maximize"></div>
                            <div className="screen-header-button minimize"></div>
                        </div>
                        <div className="screen-header-right">
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                            <div className="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div className="screen-body">
                        <div className="screen-body-item-2">
                            <div className="app-title">
                                <span>CONTACT</span>
                                <span>US</span>
                            </div>
                            <div className="app-contact">
                                <div className="app-contact-email">
                                    <p className="app-contact-email-address">
                                        agustinbrage19@gmail.com
                                    </p>
                                </div>
                                <div className="app-contact-number">
                                    <p className="app-contact-number-address">
                                        +54 11-2539-9150
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}