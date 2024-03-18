import exprees from "express";
import { config } from "dotenv";

config();

const app = exprees();

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  res.send("Hello world");
});
