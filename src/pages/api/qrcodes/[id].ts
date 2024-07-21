import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";
import mongoose from "mongoose";

export default async function handler(req: any, res: any) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const qrCode = await QRCode.findById(id);
      res.status(200).send(qrCode);
      break;

    case "PATCH":
      const updatedQrCode = await QRCode.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).send(updatedQrCode);

    case "DELETE":
      await QRCode.findByIdAndDelete(id);
      res.status(204).send();

    default:
      res.status(404).send();
  }
}
