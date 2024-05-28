import { useState, useContext, useEffect } from "react"
import { FeaturesContext } from "../../contexts/features"
import { BsArrowUpSquareFill } from "react-icons/bs"
import { BsArrowDownSquareFill } from "react-icons/bs"
import { BsXSquareFill } from "react-icons/bs"
import './description.css'

export function DescriptionPopUp() {

    const { currentFeat } = useContext(FeaturesContext)
    const [boxState, setBoxState] = useState<'full' | 'shrink' | 'close'>('close')

    let boxClasses = 'close-description'

    if(boxState === 'full') boxClasses = 'full-description'
    else if(boxState === 'close') boxClasses = 'close-description'
    else if(boxState === 'shrink') boxClasses = 'shrink-description'

    useEffect(() => {
        setBoxState(prevState => prevState === 'close' ? 'shrink' : prevState)
    }, [currentFeat])

    return (
        <div className="description-container">
            <div className="description-arrow-btns">
                {boxState === 'shrink' && (
                    <span onClick={() => setBoxState('full')}>
                        <BsArrowUpSquareFill/>
                    </span>
                )}
                {boxState === 'full' && (
                    <span onClick={() => setBoxState('shrink')}>
                        <BsArrowDownSquareFill/>
                    </span>
                )}
                <span onClick={() => setBoxState('close')}>
                    <BsXSquareFill/>
                </span>
            </div>
            <div className={`description-body ${boxClasses}`}>
                <p>{currentFeat.title}</p>
                {currentFeat.description.map((description) => (
                    <p key={description}>
                        {description}
                    </p>
                ))}
                <div className='description-body-images'>
                    {currentFeat.exampleImages.map(image => (
                        <img key={image} src={image}/>
                    ))}
                </div>
            </div>
        </div>
    )

}