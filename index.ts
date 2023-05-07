import express, { Application, Request, Response } from "express";
import { router as gameRouter } from "./src/routes/games.routes";
import { router as noteRouter } from "./src/routes/note.routes";

const app: Application = express();

app.use(express.json());

app.use("/api", gameRouter);
app.use("/api", noteRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello sssss!!!</h1>");
});

const port: number = 3000;
app.listen(port, (): void => {
  console.log(`Server listening in port: ${port}`);
});
