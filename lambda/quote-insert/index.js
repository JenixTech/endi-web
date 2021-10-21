const xlsx = require('xlsx');
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

async function main () {
  const workbook = xlsx.readFile('quotes.xlsx', { cellText: true });
  const sheet = workbook.Sheets['quotes'];
  const data = xlsx.utils.sheet_to_json(sheet);
  const dbClient = new DynamoDBClient({
    region: "us-east-2",
    credentials: {
      accessKeyId: '',
      secretAccessKey:'',
    },
  });
  for (const row of data) {
    const date = row.Date;
    const quote = row.Quote;
    try {
      const params = {
        TableName: "endi_qotd",
        Item: marshall({
          date: date,
          quote: quote,
        })
      };
      
      const command = new PutItemCommand(params);
      await dbClient.send(command);
      console.log(`Inserted ${date}`);
    } catch (error) {
        console.log("ERROR", error)
    }
  }
}

main()