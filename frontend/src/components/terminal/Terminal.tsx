import { useState } from 'react'
import { toast } from "sonner"
import './terminal.css'

const COMMAND = 'npm i -g create-brage brage-js'

export function Terminal() {

    const [isCopied, setIsCopied] = useState<boolean>(false)

    const copyToClipboard = async (data: string) => {
        await navigator.clipboard.writeText(data)

        setTimeout(() => setIsCopied(false), 2000)
        setIsCopied(true)

        toast.success('Check it here on the', {
            position: 'top-center',
            style: { width: '26.5rem' }, 
            duration: (10 * 1000),
            action: (
                <button 
                    className='terminal-toast'
                    onClick={() => window.open('https://docs.brage.app/guide/getting-started.html')}
                >
                    documentation
                </button>
            ) 
        })
    }

    return (
        <div className="terminal">
            <div className="terminal-header">
                <div className="buttons">
                    <div className="btn red"></div>
                    <div className="btn yellow"></div>
                    <div className="btn green"></div>
                </div>
            </div>
            <div className="terminal-body">
                <span className="command">➜  {COMMAND}</span>
                <button 
                    type='button' 
                    className="copy-button"
                    onClick={() => copyToClipboard(COMMAND)}
                >
                    {(isCopied) ? (
                        <span id="success-message" className="success-message hidden">
                            <svg className="icon success-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                            <span className="text success-text">copied</span>   
                        </span>
                    ) : (
                        <span id="default-message" className="default-message">
                            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                            </svg>
                            <span className="text">copy</span>
                        </span>
                    )}
                </button>
            </div>
        </div>
    )
}