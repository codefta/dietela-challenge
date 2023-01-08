"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Challenge", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categories: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("Challenge");
  },
};
