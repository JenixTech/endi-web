import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect();

handler.post(async (req: NextApiRequest, res: NextApiResponse, next) => {
    if (req.headers["content-type"] !== "application/json") {
      res.status(400).json({
        error: `Content-Type must be JSON`,
      });
      next(res);
    }

    const requiredFields = ["Email"];
    requiredFields.forEach((field) => {
      if (!req.body.hasOwnProperty(field) || field === "" || !req.body[field]) {
        res.status(400).json({ error: `Missing or Empty ${field}` });
        next(res);
      }
    });
    
    try {
      const response = await fetch(
        `https://api.moosend.com/v3/subscribers/${process.env.MOOSEND_MAILING_LIST_ID}/subscribe.json?apikey=${process.env.MOOSEND_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
          },
          body: JSON.stringify(req.body),
        }
      );

      const json = await response.json();

      if (json.Code === 0) {
        res.status(200).end();
        next(res);
      } else {
        res.status(400).json({ error: json.Error });
        next(res);
      }
    } catch (error) {
      res.status(400).json({ error });
      next(res);
    }
    next(res);
  }
);

export default handler;
