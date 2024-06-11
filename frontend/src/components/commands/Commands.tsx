import { useState, useRef } from "react"
import { SHARED_FEATURES, type Feats } from "../../data/products"
import './commands.css'

export function CommandSection() {

    const examplesMenuRef = useRef<HTMLUListElement>(null)
    const [currentItem, setCurrentItem] = useState<Feats>(SHARED_FEATURES[3])

    const renderDescription = (description: string) => {
        const regex = /(\/\/-?-?\w+?-?-?\/\/)/g
        const parts = description.split(regex)

        return parts.map(part => (
            regex.test(part) 
                ? <span>{part.replace(/\/\/(.+?)\/\//, '$1')}</span>
                : part 
        ))
    }

    return (
        <section id="command-section" className="command-section">
            <h3>
                <span className='wrapper-gold'>
                    <div className="bg"> Complete CLI tool</div>
                    <div className="fg"> Complete CLI tool</div>
                </span>
            </h3>

            <div className="feat-examples">
                <ul ref={examplesMenuRef} className="feat-examples-menu">
                    
                    {SHARED_FEATURES.map(example => (
                        <li 
                            key={example.name}
                            className={currentItem === example ? 'selected' : ''}
                            onClick={() => setCurrentItem(example)}
                        >
                            {example.name}
                        </li>
                    ))}

                </ul>
                <div className="feat-examples-description">
                    {currentItem.description.map(description => (
                        <p>{renderDescription(description)}</p>
                    ))}
                </div>
                <div className="feat-examples-titles">
                    <p>YOU RUN</p>
                    <p>{currentItem.name === 'Check flag' ? 'YOU VALIDATE' : 'YOU GENERATE'}</p>
                </div>
                <div className="feat-examples-imgs">
                    <img src={currentItem.imageCommand} alt="App example file" />
                    <img src={currentItem.imageServer} alt={currentItem.name} />
                </div>
            </div>
            
        </section>
    )
}