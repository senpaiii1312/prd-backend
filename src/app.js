import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// basic configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cookieParser());

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "https://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

//import the router

import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";
import projectRouter from "./routes/project.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/projects", projectRouter);

app.get("/", (req, res) => {
  res.send("Working!!!");
});

export default app;
