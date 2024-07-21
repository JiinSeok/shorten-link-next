import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";
import mongoose from "mongoose";

export default async function handler(req: any, res: any) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const shortLink = await ShortLink.findById(id);
      res.status(200).send("shortLink 조회", shortLink);

    case "PATCH":
      res.status(200).send({ ...req.body, ...req.query });

    case "DELETE":
      res.status(204).send();

    default:
      res.status(404).send();
  }
}
