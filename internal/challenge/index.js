const express = require("express");
const { getChallenges } = require("./controller");
const { getChallengeById } = require("./model");

module.exports = (app) => {
  const router = express.Router();
  router.get("/", getChallenges);
  router.get("/:id", getChallengeById);
  app.use("/api/v1/challenges", router);
};
