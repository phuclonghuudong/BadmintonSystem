const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const port = 2410;
const app = express();
app.use(express.json());

const url = process.env.SERVER_URL;

const errorMain = require("./v1/utils/errorMain");
// const timeZoneMiddleware = require("./utils/timeZone");
// app.use(timeZoneMiddleware);

app.use(
  cors({
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    origin: process.env.FRONTEND_URL,
  })
);
app.use(cookieParser());
app.use(morgan("dev"));
app.use(compression());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

// Routes
const mainRouter = require("./v1/routes");
app.use("/", mainRouter);

app.get("/", (req, res) => {
  res.send("Badminton server management system.");
});

app.use(errorMain);

app.listen(port, () => {
  console.log(`Server is running at ${url}${port}`);
});
