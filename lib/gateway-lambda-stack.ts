import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";

export class GatewayLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFunc = new lambda.Function(this, "HelloWorldLambda", {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: "lambda_handler.handler",
      code: lambda.Code.fromAsset("src"),
    });

    const api = new apigw.RestApi(this, "HelloWorldApi");
    const apiGwResource = api.root.addResource("hello");
    const apiGwIntegration = new apigw.LambdaIntegration(lambdaFunc);
    apiGwResource.addMethod("GET", apiGwIntegration, {
      requestParameters: {
        "method.request.querystring.name": true,
      },
    });
  }
}
