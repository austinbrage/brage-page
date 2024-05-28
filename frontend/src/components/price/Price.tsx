import { useEffect, useState } from "react"
import { PriceCard } from "../priceCard/PriceCard"
import { ToggleBtn } from "../toggle/Toggle"
import { JAVASCRIPT_PRODUCTS, TYPESCRIPT_PRODUCTS, type Products } from "../../data/products"
import "./price.css"

export function PriceSection() {

    const [currentProduct, setCurrentProduct] = useState<Products[]>(JAVASCRIPT_PRODUCTS)
    const [currentLanguage, setCurrentLanguage] = useState<'js' | 'ts'>('js')

    const toggleLanguage = () => {
        setCurrentLanguage(prevState => prevState === 'js' ? 'ts' : 'js')
    }

    useEffect(() => {
        if(currentLanguage === 'js') setCurrentProduct(JAVASCRIPT_PRODUCTS)
        if(currentLanguage === 'ts') setCurrentProduct(TYPESCRIPT_PRODUCTS)
    }, [currentLanguage])

    return (
        <section id="price-section" className="price-section">
            <h4>
                <span className='wrapper-gold'>
                    <div className="bg"> Several products</div>
                    <div className="fg"> Several products</div>
                </span>
            </h4>
            <ToggleBtn
                {...{currentLanguage, toggleLanguage}}
            />
            <PriceCard products={currentProduct} />
        </section>
    )
}