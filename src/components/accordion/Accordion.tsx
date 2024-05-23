import { useEffect, useState } from 'react'
import { BsPlusCircleFill } from "react-icons/bs"
import { BiSolidMinusCircle } from "react-icons/bi"
import './accordion.css'

type Props = {
    hiddenText: { 
        label: string
        value: string 
    }
    currentIndex: number
    updateCurrentIndex: (newIndex: number) => void
    index: number
}

const ACCORDION_CONTENT = [
    { label: 'What is it?', value: 'NodeJS Package that generates api routes dynamically on an EXPRESS app' },
    { label: 'How do I use it?', value: 'Write the SQL table and queries, run a command and the routes get created' },
    // { label: 'Button 3', value: 'Text of Accordion 3' },
    // { label: 'Button 4', value: 'Text of Accordion 4' }
]

const AccordionItem = ({ index, currentIndex, hiddenText, updateCurrentIndex }: Props) => {
    const [visibility, setVisibility] = useState(false);

    const handleToggleVisibility = () => {
        setVisibility(!visibility)
        updateCurrentIndex(index)   
    }

    useEffect(() => {
        if(currentIndex !== index) setVisibility(false)
    }, [currentIndex, index])

    return (
        <div>
            <button className="accordion__button" onClick={handleToggleVisibility}>
                {hiddenText.label}
                <span>
                    {visibility ? <BiSolidMinusCircle/> : <BsPlusCircleFill/>}
                </span>
            </button>
            <p className={`accordion__content ${visibility ? 'active' : ''}`}>
                {hiddenText.value}
            </p>
        </div>
    );
}

export function Accordion() {
    
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const updateCurrentIndex = (newIndex: number) => {
        setCurrentIndex(newIndex)
    }

    return (
        <div className="accordion-container">
            {ACCORDION_CONTENT.map((item, index) => (
                <AccordionItem 
                    index={index}
                    key={item.label} 
                    hiddenText={item}
                    currentIndex={currentIndex}
                    updateCurrentIndex={updateCurrentIndex} 
                />
            ))}
        </div>
    )
}