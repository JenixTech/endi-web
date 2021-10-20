import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse, next) => {
    if (req.headers["content-type"] !== "application/json") {
      res.status(400).json({
        error: `Content-Type must be JSON`,
      });
      next(res);
    }

    const requiredFields = ["date"];
    requiredFields.forEach((field) => {
      if (!req.body.hasOwnProperty(field) || field === "" || !req.body[field]) {
        res.status(400).json({ error: `Missing or Empty ${field}` });
        next(res);
      }
    });
    
    try {
      const response = await fetch(
        `${process.env.QOTD_URL}/date=${req.query.date}`,
        {
          method: "GET",
          headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
          },
        }
      );

      const json = await response.json();

      if (json.Code === 0) {
        res.status(200).send(json.quote);
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
