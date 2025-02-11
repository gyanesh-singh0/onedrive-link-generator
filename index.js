const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.post("/scrape", (req, res) => {
  scrapeLogic(req,res);
});

app.get("/", (req, res) => {
  res.send("Pikchar Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
