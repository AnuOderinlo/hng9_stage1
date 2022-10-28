const dotenv = require("dotenv");
const cors = require("cors");

const express = require("express");
const bioRouter = require("./routes/route");
const app = express();

dotenv.config({ path: "./config.env" });
app.use(cors());

app.use(express.json());

app.use("/", bioRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Successfully created a server on port:" + port);
});
