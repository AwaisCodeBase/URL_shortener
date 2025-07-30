require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Url = require("./models/Url");
const { nanoid } = require("nanoid");



const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shorten", async (req, res) => {
  const { fullUrl } = req.body;
  const shortId = nanoid(6);
  const shortUrl = `${req.protocol}://${req.get("host")}/${shortId}`;

  await Url.create({ full: fullUrl, short: shortId });

  res.render("result", { fullUrl, shortUrl });
});

app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const entry = await Url.findOne({ short: shortId });

  if (entry) return res.redirect(entry.full);
  res.status(404).send("URL not found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
