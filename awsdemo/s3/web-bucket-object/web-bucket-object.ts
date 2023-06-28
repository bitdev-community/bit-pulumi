import * as aws from "@pulumi/aws";
import * as fs from "fs";
import * as path from 'path';
import * as mime from "mime";

export function webBucketObject(bucketObjectName, webBucketInstance) {
  const indexPath = path.join(__dirname, 'index.html');

  const content = fs.readFileSync(indexPath).toString();
  const contentType = mime.getType(indexPath);

  const indexObject = new aws.s3.BucketObject(bucketObjectName, {
    bucket: webBucketInstance,
    key: 'index.html',
    content,
    contentType,
  });

  return indexObject;
}
