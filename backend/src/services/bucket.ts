import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { GetObjectCommand, S3Client, type S3ClientConfig } from '@aws-sdk/client-s3'

export class BucketService {
    private s3Client: S3Client

    constructor(private bucketName: string, bucketConfig: S3ClientConfig) {
        this.s3Client = new S3Client(bucketConfig)
    }

    async getFileUrl(fileName: string) {
        const command = new GetObjectCommand({
            Bucket: this.bucketName,
            Key: fileName
        })

        return await getSignedUrl(this.s3Client, command, { expiresIn: 3600 })
    }
}