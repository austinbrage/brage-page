import { MdCancel } from 'react-icons/md'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { useContext } from 'react'
import { FeaturesContext } from '../../contexts/features'
import { type Products } from '../../data/products'
import './priceCard.css'

export function PriceCard({ products }: { products: Products[] }) {

    const { updateCurrentFeat } = useContext(FeaturesContext)

    return (
        <div className="price-container">

            {products.map(product => (
                <div className="price-container-card">
                    <h5>{product.name}</h5>
                    <div>
                        <div className="price-container-card-feats">

                            {product.features.map((feature, index) => (
                                <div className="price-container-card-feats-item">
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
                                $ {product.price}
                            </p>
                            <p className="price-container-card-action-description">
                                ( Suitable for {product.suitableFor} )
                            </p>
                        </div>
                        <button type="button">
                            Get it now
                        </button>
                    </div>
                </div>
            ))}

        </div>
    )
}