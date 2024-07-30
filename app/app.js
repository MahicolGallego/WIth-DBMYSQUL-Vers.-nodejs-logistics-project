import dotenv from "dotenv";
import express from "express";
import { errorHandler } from "./middlewares/error.handler.js";
import { routes } from "./routes/router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.json());
app.use("/", routes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server power on and running at HTTP://localhost:${PORT}`);
});
