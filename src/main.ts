import e, { Express } from "express";
import { mainRouter } from "./main.router";

const app: Express = e();
const port: number = 3000;

mainRouter(app);
app.listen(port, () => console.log(`Server running on port ${port}`));
