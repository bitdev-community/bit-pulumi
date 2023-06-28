import { Output } from "@pulumi/pulumi";
import { webBucket } from "@bitpulumi/awsdemo.s3.web-bucket";
import { webBucketObject } from "@bitpulumi/awsdemo.s3.web-bucket-object";
import { apiRoutes } from "@bitpulumi/awsdemo.api.api-routes";

// Define component names (needs to be unique)
const WEB_BUCKET_NAME = "web-bucket";
const BUCKET_INDEX_OBJECT_NAME = `${WEB_BUCKET_NAME}-index-object`;
const API_NAME = "api";

// Create instances of components
const webBucketInstance = webBucket(WEB_BUCKET_NAME);
webBucketObject(BUCKET_INDEX_OBJECT_NAME, webBucketInstance.bucket);
const apiRouteInstance = apiRoutes(API_NAME);

/* Pulumi stack exports */
export const htmlPage = webBucketInstance.bucket.bucketDomainName.apply( (endpoint) => `https://${endpoint}/index.html`) as Output<string>;
export const apiUrl = apiRouteInstance.url.apply((url) => `${url}api/hello`) as Output<string>;
