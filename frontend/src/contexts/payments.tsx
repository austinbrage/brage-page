import { useState, createContext, type ReactNode } from 'react'
import { type Products } from '../data/products'

type Context = {
    isOpenPayment: boolean
    updateOpenPayment: (newState: boolean) => void
    currentProduct: Products
    updateCurrentProduct: (newProduct: Products) => void
}

const FREE_PRODUCT: Products = {
    name: 'Basic Free',
    price: '0',
    suitableFor: 'beginers',
    endpoint: '',
    features: [],
    isAvailable: true
}

const initialContext: Context = {
    isOpenPayment: false,
    updateOpenPayment: () => {},
    currentProduct: FREE_PRODUCT,
    updateCurrentProduct: () => {}
}

export const PaymentContext = createContext(initialContext)

export function PaymentProvider({ children }: { children: ReactNode }) {

    const [isOpenPayment, setIsOpenPayment] = useState<boolean>(false)
    const [currentProduct, setCurrentProduct] = useState<Products>(FREE_PRODUCT)

    const updateOpenPayment = (newState: boolean) => setIsOpenPayment(newState) 
    const updateCurrentProduct = (newProduct: Products) => setCurrentProduct(newProduct) 

    return (
        <PaymentContext.Provider value={{ 
            isOpenPayment, 
            updateOpenPayment,
            currentProduct,
            updateCurrentProduct 
        }}>
            {children}
        </PaymentContext.Provider>
    )
}