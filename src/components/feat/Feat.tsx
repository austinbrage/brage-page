import { useState, useEffect, useRef } from "react"
import { EXAMPLES_ITEMS, type Items } from "../../data/examples"
import "./Feat.css"

export function FeatSection() {

    const examplesMenuRef = useRef<HTMLUListElement>(null)
    const [currentItem, setCurrentItem] = useState<Items>(EXAMPLES_ITEMS[1])

    useEffect(() => {
    }, [])

    return (
        <section className="feat-section">
            <h3>
                <span className='wrapper-gold'>
                    <div className="bg"> No ai, pure algorithm</div>
                    <div className="fg"> No ai, pure algorithm</div>
                </span>
            </h3>

            <div className="feat-examples">
                <ul ref={examplesMenuRef} className="feat-examples-menu">
                    
                    {EXAMPLES_ITEMS.map(example => (
                        <li 
                            className={currentItem === example ? 'selected' : ''}
                            onClick={() => setCurrentItem(example)}
                        >
                            {example.name}
                        </li>
                    ))}

                </ul>
                <div className="feat-examples-titles">
                    <p>YOU WRITE</p>
                    <p>YOU GET</p>
                </div>
                <div className="feat-examples-imgs">
                    <img src={currentItem.imageApp} alt="App example file" />
                    <img src={currentItem.imageServer} alt={currentItem.name} />
                </div>
            </div>
        </section>
    )
}