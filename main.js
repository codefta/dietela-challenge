const express = require("express");
const cors = require("cors");
const challenge = require("./internal/challenge");
const sequelize = require("./pkg/sequelize");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// define modules for every domain
challenge(app);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
