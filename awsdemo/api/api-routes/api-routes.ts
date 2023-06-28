import * as apigateway from "@pulumi/aws-apigateway";
import { helloLambda } from "@bitpulumi/awsdemo.api.lambdas.hello-lambda";

export function apiRoutes(endpointName: string) {
  const api = new apigateway.RestAPI(endpointName, {
    routes: [
      {
        path: "/api/hello",
        method: "GET",
        eventHandler: helloLambda("hello-lambda"),
      },
    ],
  });
  return api;
}
