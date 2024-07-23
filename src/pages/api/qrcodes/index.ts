import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";

export default async function handler(req: any, res: any) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      const qrCodes = await QRCode.find();
      res.status(200).send(qrCodes);
      break;

    case "POST":
      const newQrCode = await QRCode.create(req.body);
      res.status(201).send(newQrCode);
      break;

    default:
      res.status(404).send();
  }
}
