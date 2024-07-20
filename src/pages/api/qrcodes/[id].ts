export default function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      res.status(200).send(req.query.id);

    case "PATCH":
      res.status(200).send({ ...req.body, ...req.query });

    case "DELETE":
      res.status(204).send();

    default:
      res.status(404).send();
  }
}
