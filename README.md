# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## apigateway

get id
```
awslocal apigateway get-rest-apis 
```

get stage_name
```
awslocal apigateway get-stages --rest-api-id {id}
```

get path
```
awslocal apigateway get-resources --rest-api-id {id}
```

curl
```
curl http://localhost:4566/restapis/{id}/{stage_name}/_user_request_/{path}?name={your_name}
```
