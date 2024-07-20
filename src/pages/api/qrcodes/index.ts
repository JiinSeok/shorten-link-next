export default function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      res.status(200).send([
        {
          id: "abc",
          title: "위키피디아 Next.js",
          url: "https://en.wikipedia.org/wiki/Next.js",
        },
        {
          id: "def",
          title: "코드잇 자유게시판",
          url: "https://codeit.kr/community/general",
        },
        {
          id: "ghi",
          title: "코드잇 질문답변",
          url: "https://www.codeit.kr/community/questions",
        },
      ]);

    case "POST":
      res.status(201).send(req.body);

    default:
      res.status(404).send();
  }
}
