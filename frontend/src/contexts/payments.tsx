import { useState, createContext, type ReactNode } from 'react'
import { JAVASCRIPT_PRODUCTS, type Products } from '../data/products'

type Context = {
    isOpenPayment: boolean
    updateOpenPayment: (newState: boolean) => void
    currentProduct: Products
    updateCurrentProduct: (newProduct: Products) => void
}

const initialContext: Context = {
    isOpenPayment: false,
    updateOpenPayment: () => {},
    currentProduct: JAVASCRIPT_PRODUCTS[0],
    updateCurrentProduct: () => {}
}

export const PaymentContext = createContext(initialContext)

export function PaymentProvider({ children }: { children: ReactNode }) {

    const [isOpenPayment, setIsOpenPayment] = useState<boolean>(false)
    const [currentProduct, setCurrentProduct] = useState<Products>(JAVASCRIPT_PRODUCTS[0])

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