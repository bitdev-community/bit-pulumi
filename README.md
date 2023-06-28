# Bit with Pulumi

Install Pulumi
```
brew install pulumi/tap/pulumi
```

Configure your cloud credentials (e.g AWS)

```
export AWS_ACCESS_KEY_ID=<YOUR_ACCESS_KEY_ID>
export AWS_SECRET_ACCESS_KEY=<YOUR_SECRET_ACCESS_KEY>
export AWS_REGION=<YOUR_AWS_REGION>
```

Refer [Azure](https://www.pulumi.com/registry/packages/azure/installation-configuration/), [Google Cloud (GCP)](https://www.pulumi.com/registry/packages/gcp/installation-configuration/), [Kubernetes](https://www.pulumi.com/registry/packages/kubernetes/installation-configuration/)

# Creating Components

```
bit create node awsdemo/s3/simple-bucket
```

# Updating API Component Dependencies

Once you modify any of the dependent components, go to `/apps/pulumi-entry` director and run the below command:

```
 bit compile && pulumi up
```

# Troubleshooting

| Error                                   | Solution                                                                                                                                                         |
|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Error putting S3 policy: AccessDenied | Fix steps: `AWS Web Console > S3 Bucket > Permissions > Block public access (Edit) > Off > pulumi up`. For more information refer, [Relax Amazon S3 Block Public Access](https://aws.amazon.com/blogs/aws/amazon-s3-block-public-access-another-layer-of-protection-for-your-accounts-and-buckets/). |