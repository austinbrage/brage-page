import { FaCheckCircle } from "react-icons/fa"
import './success.css'

export function SuccessPayment() {
    return (
        <div className="success-container">
            <div className="success-container-card">
                <div className="message-box _success">
                    <span className="fa-check-circle">
                        <FaCheckCircle/>
                    </span>
                    <h2>Your payment was successful</h2>
                    <p>Thank you for your payment. we will <br/> be in contact with more details shortly</p>      
                </div>
            </div>
            <div className="download-container">
                <p>If your download has not started, hit this button</p>
                <a>
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
        </div>
    )
}