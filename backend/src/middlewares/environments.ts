import { env } from "hono/adapter"
import { S3ClientConfig } from "@aws-sdk/client-s3"
import { type Next, type Context } from "hono"

type MP_SECRETS = {
    MERCADOPAGO_ACCESS_TOKEN: string
}
    
type RESEND_SECRETS = {
    RESEND_API_KEY: string
}

type R2_SECRETS = { 
    BUCKET_NAME: string
    ACCESS_KEY: string
    SECRET_ACCESS_KEY: string 
    CLOUDFLARE_ENDPOINT: string
}

export type EnvironmentSecrets = {
    mpAccessToken: string
    bucketName: string
    resendApiKey: string
    bucketConfig: S3ClientConfig
}

export class EnvironmentMiddlewares {

    static async mercadopagoSecrets(c: Context, next: Next) {
        const { MERCADOPAGO_ACCESS_TOKEN } = env<MP_SECRETS>(c)

        c.set('mpAccessToken', MERCADOPAGO_ACCESS_TOKEN)
        
        await next()
    }

    static async resendSecrets(c: Context, next: Next) {
        const { RESEND_API_KEY } = env<RESEND_SECRETS>(c)

        c.set('resendApiKey', RESEND_API_KEY)
        
        await next()
    }

    static async bucketSecrets(c: Context, next: Next) {
        const { 
            BUCKET_NAME, 
            ACCESS_KEY, 
            SECRET_ACCESS_KEY, 
            CLOUDFLARE_ENDPOINT 
        } = env<R2_SECRETS>(c)

        const BucketConfig: S3ClientConfig = {
            region: 'auto',
            endpoint: CLOUDFLARE_ENDPOINT,
            credentials: {
                accessKeyId: ACCESS_KEY,
                secretAccessKey: SECRET_ACCESS_KEY
            }
        }

        c.set('bucketName', BUCKET_NAME)
        c.set('bucketConfig', BucketConfig)
        
        await next()
    }
}