const Challenge = require("./domain");

module.exports = {
  findAllChallenges: async () => {
    const challenges = await Challenge.findAll();
    return challenges;
  },
  getChallengeById: async (id) => {
    const challenge = await Challenge.findByPk(id);
    return challenge;
  },
};
