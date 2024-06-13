type Items = {
    id: string
    title: string
    quantity: number
    description: string
    currency_id: string
    unit_price: number
}

type PaymentResponse = { 
    id: number
    amount: string
    status: string
    metadata: object
    date_created: string 
    additional_info: { 
        items: Array<{
            id: string
            title: string 
        }> 
    } 
}

type PreferenceResponse = { 
    init_point: string 
}

export class MpPaymentService {

    constructor(private accessToken: string) {}

    async getPayment(paymentId: string) {
        const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        })

        if (!response.ok) {
            const errorText = await response.text()
            throw new Error(errorText)
        }

        const data = await response.json() as PaymentResponse

        const buyerData = {
            id: data.id,
            status: data.status,
            amount: data.amount,
            metadata: data.metadata,
            data_created: data.date_created,
            item_info: data.additional_info.items[0]
        }

        return {
            buyerData,
            isApproved: data.status === 'approved',
            productId: data.additional_info?.items?.[0]?.id,
            productTitle: data.additional_info?.items?.[0]?.title
        }
    }
}

export class MpPreferenceService {

    constructor(
        private frontHostUrl: string,
        private accessToken: string, 
        private payerName: string, 
        private payerEmail: string
    ) {}

    private getPreferenceData(item: Items) {
        return {
            items: [item], 
            payer: { 
                name: this.payerName, 
                email: this.payerEmail 
            },
            metadata: { 
                payerName: this.payerName, 
                payerEmail: this.payerEmail 
            },
            back_urls: {
                success: `${this.frontHostUrl}/payment-success`,
                failure: `${this.frontHostUrl}/payment-failure`,
                pending: `${this.frontHostUrl}/payment-pending`
            },
            auto_return: 'approved'
        }
    } 

    private async getPreferenceInitPoint(item: Items) {
        const preference = this.getPreferenceData(item)

        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.accessToken}`,
            },
            body: JSON.stringify(preference),
        })

        if (!response.ok) {
            const errorText = await response.text()
            throw new Error(`At creating preference [${response.statusText}, ${errorText}]`)
        }

        const data = await response.json() as PreferenceResponse
        return data?.init_point
    }

    async buyBasicJS() {
        return await this.getPreferenceInitPoint({
            id: 'brage-javascript-tool-basic.zip',
            title: 'Basic Javascript BRAGE',
            description: 'BRAGE JavaScript tool for beginners',
            currency_id: 'USD',
            quantity: 1,
            unit_price: 94.55
        })
    }

    async buySqlSaferJS() {
        return await this.getPreferenceInitPoint({
            id: 'brage-javascript-tool-sqlcmd.zip',
            title: 'SQL Safer Javascript BRAGE',
            description: 'BRAGE JavaScript tool with sql command',
            currency_id: 'USD',
            quantity: 1,
            unit_price: 124.55
        })
    }

    async buyDbGenaratorJS() {
        return await this.getPreferenceInitPoint({
            id: 'brage-javascript-tool-dbcmd.zip',
            title: 'DB Generator Javascript BRAGE',
            description: 'BRAGE JavaScript tool with db command',
            currency_id: 'USD',
            quantity: 1,
            unit_price: 154.55
        })
    }

    async buyFullGenaratorJS() {
        return await this.getPreferenceInitPoint({
            id: 'brage-javascript-tool-complete.zip',
            title: 'Fullstack Generator Javascript BRAGE',
            description: 'BRAGE JavaScript complete tool',
            currency_id: 'USD',
            quantity: 1,
            unit_price: 184.55
        })
    }
}