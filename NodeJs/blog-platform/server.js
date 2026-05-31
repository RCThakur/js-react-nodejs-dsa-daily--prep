require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use(loggerMiddleware);

app.use("/api/auth");

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server Runnig on Port ${process.env.PORT}`);
});
