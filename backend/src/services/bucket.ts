import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { bucketConfig, ENVIRONMENT, SIGNED_URL_EXPIRE, type Environment } from '../utils/config'

export class BucketService {
    private s3Client: S3Client
    private bucketName: string

    constructor() {
        const currentBucketConfig = bucketConfig[ENVIRONMENT as Environment]

        this.bucketName = currentBucketConfig.bucketName
        this.s3Client = new S3Client(currentBucketConfig.s3ClientConfig)
    }

    async getFileUrl(fileName: string) {
        const command = new GetObjectCommand({
            Bucket: this.bucketName,
            Key: fileName
        })

        return await getSignedUrl(this.s3Client, command, { expiresIn: +SIGNED_URL_EXPIRE })
    }
}