import { useState, createContext, ReactNode, useEffect } from "react"
import { SHARED_FEATURES } from "../data/products"
import { type Feats } from "../data/products"

type Context = {
    currentFeat: Feats
    updateCurrentFeat: (newFeat: number) => void
}

const initFeat = SHARED_FEATURES[0]

export const FeaturesContext = createContext<Context>({ 
    currentFeat: initFeat,
    updateCurrentFeat: () => {}
})

export function FeaturesProvider({ children }: { children: ReactNode }) {
    const [currentFeat, setCurrentFeat] = useState<Feats>(initFeat)
    const [currentFeatIndex, setCurrentFeatIndex] = useState<number>(0)

    const updateCurrentFeat = (newFeat: number) => setCurrentFeatIndex(newFeat)

    useEffect(() => {
        setCurrentFeat(SHARED_FEATURES[currentFeatIndex])
    }, [currentFeatIndex, setCurrentFeat])

    return (
        <FeaturesContext.Provider value={{ currentFeat, updateCurrentFeat }}>
            {children}
        </FeaturesContext.Provider>
    )
}