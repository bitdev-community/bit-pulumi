import * as aws from "@pulumi/aws";
import { publicReadPolicy } from '@bitpulumi/awsdemo.s3.public-read-policy'

export function webBucket(bucketName: string) {
  const bucket = new aws.s3.Bucket(bucketName, {
    website: {
      indexDocument: "index.html"
    }
  });

  // Set the access policy for the bucket so all objects are readable
  const bucketPolicy = new aws.s3.BucketPolicy(`${bucketName}-bucketPolicy`, {
    bucket: bucket.bucket,
    policy: bucket.bucket.apply(publicReadPolicy),
  });

  return { bucket, bucketPolicy };
}
