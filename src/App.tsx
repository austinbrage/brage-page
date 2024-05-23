import { HeroSection } from './components/hero/Hero'
import { FeatSection } from './components/feat/Feat'
import { PriceSection } from './components/price/Price'
import { DescriptionPopUp } from './components/description/Description'
import { FeaturesProvider } from './contexts/features'
import './App.css'

function App() {

  return (
    <>
      <HeroSection/>
      <FeatSection/>
      <FeaturesProvider>
        <PriceSection/>
        <DescriptionPopUp/>
      </FeaturesProvider>
    </>
  )
}

export default App
