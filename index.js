const express = require("express");
const bioRouter = require("./routes/route");
const app = express();

app.use(express.json());

app.use("/", bioRouter);

const port = 3004;
app.listen(port, () => {
  console.log("Successfully created a server on port:" + port);
});
