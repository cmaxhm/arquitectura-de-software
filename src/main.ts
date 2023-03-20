import e, { Express, json } from "express";
import { connect } from "mongoose";
import { environment } from "./environments/environment";
import { mainRouter } from "./main.router";

const app: Express = e();
const port: number = 3000;

app.use(json());
mainRouter(app);
connect(environment.apiUrl).then(() => {
  app.listen(port, () => console.log(`Server running on port ${ port }`));
});
