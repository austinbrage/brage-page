import { MercadoPagoConfig, Preference } from 'mercadopago'
import { MP_ACCESS_TOKEN } from '../utils/config'

type Items = {
    id: string
    title: string
    quantity: number
    unit_price: number
}

export class MercadoPagoService {
    private mpClient: MercadoPagoConfig

    constructor() {
        this.mpClient = new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN })
    }

    private async getPreferenceInitPoint(item: Items) {
        const preference = await new Preference(this.mpClient).create({
            body: { items: [item] }
        })

        return preference.sandbox_init_point
    }

    async buyBasicJS() {
        return await this.getPreferenceInitPoint({
            id: 'basic_javascript_product',
            title: 'Basic Javascript BRAGE',
            quantity: 1,
            unit_price: 94.55
        })
    }

    async buySqlSaferJS() {
        return await this.getPreferenceInitPoint({
            id: 'sqlsafer_javascript_product',
            title: 'SQL Safer Javascript BRAGE',
            quantity: 1,
            unit_price: 124.55
        })
    }

    async buyDbGenaratorJS() {
        return await this.getPreferenceInitPoint({
            id: 'dbgenerator_javascript_product',
            title: 'DB Generator Javascript BRAGE',
            quantity: 1,
            unit_price: 154.55
        })
    }

    async buyFullGenaratorJS() {
        return await this.getPreferenceInitPoint({
            id: 'fullgenerator_javascript_product',
            title: 'Fullstack Generator Javascript BRAGE',
            quantity: 1,
            unit_price: 184.55
        })
    }
}