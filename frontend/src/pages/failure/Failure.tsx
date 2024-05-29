import { FaTimesCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
import './failure.css'

export function FailPayment() {
    return (
        <div className="failure-container">
            <div className="failure-container-card">
                <div className="message-box _failed">
                    <span className="fa-check-circle">
                        <FaTimesCircle/>
                    </span>
                    <h2>Your payment failed</h2>
                    <p>Try again later</p> 
                </div> 
            </div> 
            <div className="backbtn-container">
                <Link to={'/'} className="backbtn">
                    Back to home
                </Link>
            </div>
        </div>
    )
}