import express, {json} from "express";
import "express-async-errors";
import "reflect-metadata";
import "./database";
import { cathErrors } from "./middlewares/catchErrors";
import { routes } from "./routes/routes";
import cors from "cors";


const app = express();

app.use(json());
app.use(cors());
app.use(routes);
app.use(cathErrors);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
