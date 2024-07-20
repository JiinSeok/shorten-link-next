export default function handler(req: any, res: any) {
  // res.send("힘내자 지나간 페이지 라우터도");
  // res.send(req.query);
  // res.send(req.body);
  // res.send(req.cookies);
  // res.send(req.method);

  switch (req.method) {
    case "POST":
      res.status(201).send({
        title: "new post",
        content: "new content",
      });
      break;

    case "GET":
      res.status(401).send("Unauthorized");
      break;

    default:
      res.status(404).send();
  }
}
