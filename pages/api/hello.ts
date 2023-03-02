import express from "express";

const app = express();

app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello World! This is a test API" });
});

export default app;
