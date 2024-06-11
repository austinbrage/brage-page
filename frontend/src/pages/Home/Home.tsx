import { Toaster } from 'sonner'
import { HeroSection } from '../../components/hero/Hero'
import { FeatSection } from '../../components/feat/Feat'
import { PriceSection } from '../../components/price/Price'
import { ContactSection } from '../../components/contact/Contact'
import { DescriptionPopUp } from '../../components/description/Description'
import { CommandSection } from '../../components/commands/Commands'
import { FeaturesProvider } from '../../contexts/features'
import { PaymentProvider } from '../../contexts/payments'
import { PaymentPopUp } from '../../components/payment/Payment'

export function Home() {
    return (
        <PaymentProvider>
            <PaymentPopUp/>
            <HeroSection/>
            <FeatSection/>
            <CommandSection/>
            <FeaturesProvider>
                <PriceSection/>
                <DescriptionPopUp/>
            </FeaturesProvider>
            <ContactSection/>
            <Toaster 
                richColors 
                theme="dark"
                toastOptions={{ style: { fontSize: '1rem' } }}
            />
        </PaymentProvider>
    )
}