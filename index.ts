import express, { Application, Request, Response } from "express";
import { router } from "./src/routes/games.routes";

const app: Application = express();

app.use(express.json());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello sssss!!!</h1>");
});

const port: number = 3000;
app.listen(port, (): void => {
  console.log(`Server listening in port: ${port}`);
});
