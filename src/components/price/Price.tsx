import { PriceCard } from "../priceCard/PriceCard"
import { PRODUCTS } from "../../data/products"
import "./price.css"

export function PriceSection() {
    return (
        <section className="price-section">
            <h4>
                <span className='wrapper-gold'>
                    <div className="bg"> Several products</div>
                    <div className="fg"> Several products</div>
                </span>
            </h4>
            <PriceCard products={PRODUCTS} />
        </section>
    )
}