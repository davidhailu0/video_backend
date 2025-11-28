import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";
import path from "path";
import { errorHandler } from "./middleware/errorMiddleware";

const app: Application = express();

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/uploads",
  (req, res, next) => {
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    next();
  },
  express.static(path.join(process.cwd(), "src", "uploads"))
);

app.use("/api", routes);

app.use(errorHandler);

export default app;
