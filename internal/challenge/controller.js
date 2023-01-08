const { findAllChallenges } = require("./model");

module.exports = {
  getChallenges: async (req, res) => {
    try {
      const challenges = await findAllChallenges();
      res.json(challenges);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
  getChallengeById: async (req, res) => {
    if (!req.params.id) {
      res.status(400).json({ message: "Missing challenge id" });
    }

    try {
      const challenge = await getChallengeById(req.params.id);
      res.json(challenge);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  },
};
