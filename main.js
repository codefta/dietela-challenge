const express = require("express");
const sequelizeConnect = require("./pkg/sequelizeConnect");
const app = express();
const port = 8080;

sequelizeConnect();

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
