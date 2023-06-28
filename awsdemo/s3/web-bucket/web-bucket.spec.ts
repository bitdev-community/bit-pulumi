/* eslint-disable */

import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { webBucket } from "./web-bucket";

// Defines the mock behavior
pulumi.runtime.setMocks({
  // @ts-ignore
  newResource: function (
    props: any,
    name: string,
    inputs: any
  ): { id: string; state: any } {
    if (props.type === "aws:s3/bucket:Bucket") {
      return {
        id: props.name + "_id",
        state: { ...inputs, arn: props.name + "_arn" },
      };
    }
    return { id: name + "_id", state: {} };
  },
  // @ts-ignore
  call: function (token: string, args: any, provider?: string): any {
    return args;
  },
});

describe("Bucket Tests", () => {
  let bucket: aws.s3.Bucket;

  // The beforeAll block
  beforeAll(() => {
    bucket = webBucket("web-bucket").bucket
  });

  test("Bucket ID is as expected", async () => {
    await bucket.id.apply((id) => {
      expect(id).toBe("web-bucket_id");
    });
  });

  test("Bucket Name is as expected", async () => {
    await bucket.arn.apply((arn) => {
      expect(arn).toBe("web-bucket_arn");
    });
  });
});
