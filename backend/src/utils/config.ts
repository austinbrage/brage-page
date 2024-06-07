import { config } from 'dotenv'
import { type S3ClientConfig } from '@aws-sdk/client-s3'

config();

(() => {
    const allowedEnvironments = ['development', 'production', 'test'];
    
    if (!allowedEnvironments.includes(process.env.NODE_ENV ?? '')) {
        throw new Error(`
            The environment '${process.env.NODE_ENV}' is not valid.
            It must be one of: ${allowedEnvironments.join(', ')}
        `);
    }
})()

type BucketConfig = {
    bucketName: string
    s3ClientConfig: S3ClientConfig
}

export type Environment = 'development' | 'production' | 'test'

export const ENVIRONMENT = process.env.NODE_ENV ?? 'production'
export const SIGNED_URL_EXPIRE = process.env.SIGNED_URL_EXPIRE ?? '3600'

export const PORT = {
    development: process.env.DEV_PORT ?? 3000,
    production: process.env.PROD_PORT ?? 3001,
    test: process.env.TEST_PORT ?? 3002
}

export const bucketConfig: Record<Environment, BucketConfig> = {
    development: {
        bucketName: process.env.DEV_BUCKET_NAME ?? '',
        s3ClientConfig: {
            region: 'auto',
            endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com` ?? '',
            credentials: {
                accessKeyId: process.env.DEV_ACCESS_KEY_ID ?? '',
                secretAccessKey: process.env.DEV_SECRET_ACCESS_KEY ?? ''
            }
        }
    },
    production: {
        bucketName: process.env.PROD_BUCKET_NAME ?? '',
        s3ClientConfig: {
            region: 'auto',
            endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com` ?? '',
            credentials: {
                accessKeyId: process.env.PROD_ACCESS_KEY_ID ?? '',
                secretAccessKey: process.env.PROD_SECRET_ACCESS_KEY ?? ''
            }
        }
    },
    test: {
        bucketName: process.env.TEST_BUCKET_NAME ?? '',
        s3ClientConfig: {
            region: 'auto',
            endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com` ?? '',
            credentials: {
                accessKeyId: process.env.TEST_ACCESS_KEY_ID ?? '',
                secretAccessKey: process.env.TEST_SECRET_ACCESS_KEY ?? ''
            }
        }
    }
}