const express = require("express");
const app = express();

const { config } = require("./config/index");
const schedulesApi = require("./routes/schedules.js");

//body parser
app.use(express.json());

schedulesApi(app);

app.listen(config.port, function () {
  console.log(`listening http://localhost:${config.port}`);
});
