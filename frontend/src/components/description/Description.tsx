import { useState, useContext, useEffect } from "react"
import { FeaturesContext } from "../../contexts/features"
import { BsArrowUpSquareFill } from "react-icons/bs"
import { BsArrowDownSquareFill } from "react-icons/bs"
import { BsXSquareFill } from "react-icons/bs"
import './description.css'

type Classes = 'full' | 'shrink' | 'close'

export function DescriptionPopUp() {

    const { isOpenModal, currentFeat } = useContext(FeaturesContext)
    
    const [modalClass, setModalClass] = useState<Classes>('close')
    const handleModal = (newState: Classes) => setModalClass(newState)

    useEffect(() => {
        // setModalClass(prevState => {
        //     if(prevState === 'shrink') return 'shrink'
        //     else if(prevState === 'full') return 'full'
        //     else return 'shrink'
        // })
    }, [isOpenModal])

    return (
        <div className="description-container">
            <div className="description-arrow-btns">
                {modalClass === 'shrink' && (
                    <span onClick={() => handleModal('full')}>
                        <BsArrowUpSquareFill/>
                    </span>
                )}
                {modalClass === 'full' && (
                    <span onClick={() => handleModal('shrink')}>
                        <BsArrowDownSquareFill/>
                    </span>
                )}
                <span onClick={() => handleModal('close')}>
                    <BsXSquareFill/>
                </span>
            </div>
            <div className={`description-body ${modalClass}-description`}>
                <p>{currentFeat.title}</p>
                {currentFeat.description.map((description) => (
                    <p key={description}>
                        {description}
                    </p>
                ))}
                <div className='description-body-images'>
                    {/* {currentFeat.exampleImages.map(image => (
                        <img key={image} src={image}/>
                    ))} */}
                </div>
            </div>
        </div>
    )

}