const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

exports.handler = async (event) => {
    let response = {
        headers: {
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        }
    };
    try {
        const dbClient = new DynamoDBClient({ region: "us-east-2" });

        const params = {
          TableName: "endi_qotd",
          Key: marshall({
            date: event.queryStringParameters.date
          })
        };
        
        const command = new GetItemCommand(params);
        
        const { Items } = await dbClient.send(command);
        const jsonItems = Items.map((item) => unmarshall(item));

        response = {
            ...response,
            statusCode: 200,
            body: JSON.stringify(jsonItems),
        };
    } catch (error) {
        console.log("ERROR", error)
        response = {
            ...response,
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
    return response
};
