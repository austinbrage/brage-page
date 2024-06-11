import { useRef, type FormEvent } from 'react'
import { toast } from "sonner"
import './contact.css'

export function ContactSection() {

    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const number = formData.get('number') as string
        const message = formData.get('message') as string

        try {
            const response = await fetch(`${import.meta.env.VITE_API_HOST_URL}/product/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, number, message })
            })
            const data = await response.json()
            if(data.success) toast.success('Email sended, we will answer you as soon as possible!')
            formRef?.current?.reset()
        } catch(err) {
            console.log(err)
        } 
    }

    return (
        <div id='contact-section' className="contact-section">
            <h4>
                <span className='wrapper-gold'>
                    <div className="bg"> Send me a message</div>
                    <div className="fg"> Send me a message</div>
                </span>
            </h4>
            <div className="contact-section-container">
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
                        <div className="screen-body-item left">
                            <div className="app-title">
                                <span>CONTACT</span>
                                <span>US</span>
                            </div>
                            <div className="app-contact">
                                CONTACT INFO : +54 11 2549 9150
                            </div>
                        </div>
                        <div className="screen-body-item">
                            <form ref={formRef} onSubmit={handleSubmit} className="app-form">
                                <div className="app-form-group">
                                    <label htmlFor="name" style={{ display: 'none' }}>Name</label>
                                    <input 
                                        required
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="NAME"
                                        className="app-form-control" 
                                    />
                                </div>
                                <div className="app-form-group">
                                    <label htmlFor="email" style={{ display: 'none' }}>Email</label>
                                    <input 
                                        required
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="EMAIL"
                                        className="app-form-control" 
                                    />
                                </div>
                                <div className="app-form-group">
                                    <label htmlFor="number" style={{ display: 'none' }}>Number</label>
                                    <input 
                                        id="number"
                                        name="number"
                                        type="text"
                                        placeholder="CONTACT NO (OPTIONAL)"
                                        className="app-form-control" 
                                    />
                                </div>
                                <div className="app-form-group message">
                                    <label htmlFor="message" style={{ display: 'none' }}>Message</label>
                                    <input 
                                        id="message"
                                        name="message"
                                        type="text"
                                        placeholder="MESSAGE"
                                        className="app-form-control" 
                                    />
                                </div>
                                <div className="app-form-group buttons">
                                    <button className="app-form-button">CANCEL</button>
                                    <button className="app-form-button">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="credits">
                    Created by
                    <a className="credits-link" href="https://github.com/austinbrage" target="_blank">
                        <svg className="dribbble" viewBox="0 0 200 200">
                            <g stroke="#ffffff" fill="none">
                                <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
                                <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" strokeWidth="20"></path>
                                <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" strokeWidth="20"></path>
                                <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" strokeWidth="20"></path>
                            </g>
                        </svg>
                        AustinBrage
                    </a>
                </div>
            </div>
        </div>
    )

}