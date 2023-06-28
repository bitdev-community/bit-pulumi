import * as aws from "@pulumi/aws";
import { helloService } from "@bitpulumi/awsdemo.services.hello-service";

const {message} = helloService();

export function helloLambda(lambdaName: string) {
  return new aws.lambda.CallbackFunction(lambdaName, {
    callback: async () => {
     
     // lambda code
     
      return {
        statusCode: 200,
        body: message,
      };
    },
  });
}
