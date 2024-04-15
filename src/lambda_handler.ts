import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || "";

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(`Hello World ${name}!`),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return response;
};
