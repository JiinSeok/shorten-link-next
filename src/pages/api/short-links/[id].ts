import mongoose from "mongoose";
import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req: any, res: any) {
  // res.send("힘내자 지나간 페이지 라우터도");
  // res.send(req.query);
  // res.send(req.body);
  // res.send(req.cookies);
  // res.send(req.method);

  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "POST":
      res.status(201).send({
        title: "new post",
        content: "new content",
      });
      break;

    case "GET":
      const shortLink = await ShortLink.findById(id);
      res.status(200).send(shortLink);
      break;

    default:
      res.status(404).send();
  }
}
