import { MdCancel } from 'react-icons/md'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { useContext } from 'react'
import { FeaturesContext } from '../../contexts/features'
import { PaymentContext } from '../../contexts/payments'
import { type Products } from '../../data/products'
import './priceCard.css'

export function PriceCard({ products }: { products: Products[] }) {

    const { updateCurrentFeat } = useContext(FeaturesContext)
    const { updateOpenPayment, updateCurrentProduct } = useContext(PaymentContext)

    const handleOpenPayment = (newProduct: Products) => {
        updateOpenPayment(true)
        updateCurrentProduct(newProduct)
    }

    return (
        <div className="price-container">

            {products.map(product => (
                <div key={product.name} className="price-container-card">
                    <h5>{product.name}</h5>
                    <div>
                        <div className="price-container-card-feats">

                            {product.features.map((feature, index) => (
                                <div 
                                    key={feature.description[0]}
                                    className="price-container-card-feats-item"
                                >
                                    {feature.isIncluded ? (
                                        <span className="check-mark">
                                            <IoCheckmarkCircle/>
                                        </span>
                                    ) : (
                                        <span className="cancel-mark">
                                            <MdCancel/>
                                        </span>
                                    )}
                                    <p onClick={() => updateCurrentFeat(index)}>
                                        {feature.title}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="price-container-card-action">
                        <div>
                            <p className="price-container-card-action-number">
                                {
                                    product.price.includes('Free') || product.price === '' 
                                        ? '' 
                                        : '$'
                                } 
                                {
                                    product.price === ''
                                        ? 'Paid product'
                                        : product.price
                                }
                            </p>
                            <p className="price-container-card-action-description">
                                ( Suitable for {product.suitableFor} )
                            </p>
                        </div>
                        <button 
                            onClick={() => handleOpenPayment(product)}
                            className={
                                product.isAvailable 
                                    ? '' 
                                    : 'notAvailable'
                            }
                            type="button"
                        >
                            {product.isAvailable
                                ? 'Get it now'
                                : 'Not available yet'
                            }
                        </button>
                    </div>
                </div>
            ))}

        </div>
    )
}