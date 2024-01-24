import express from "express";
import axios from "axios";

const app = express();

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
