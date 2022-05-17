import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse, next) => {
    try {
      if (req.headers["content-type"] !== "application/json") {
        throw `Content-Type must be JSON`;
      }
  
      const requiredFields = ["email", "feedback"];
  
      requiredFields.forEach((field) => {
        if (!req.body.hasOwnProperty(field) || field === "" || !req.body[field]) {
          throw `Missing or Empty ${field}`;
        }
      });

      const url =
      "https://6wi9u41kta.execute-api.us-east-2.amazonaws.com/Production/contact";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(req.body)
      });

      const json = await response.json();

      if (json.statusCode < 300) {
        res.status(200).end();
        next(res);
      } else {
        res.status(400).json({ error: json.Error });
      }
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
);

export default handler;