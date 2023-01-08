"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("challenges", [
      {
        title: "Challenge 1",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non justo eu sapien aliquet lobortis in sit amet massa. Nunc et maximus nibh. Donec dignissim, velit vel mattis viverra, libero justo mattis arcu, sed auctor neque eros sit amet magna. Fusce pretium lacus in tempor rutrum. Pellentesque blandit sollicitudin sem sit amet posuere. Praesent sit amet pharetra felis. Nunc lobortis neque quis feugiat lacinia. Donec vel risus lectus. Morbi viverra, ipsum consectetur efficitur convallis, sapien nibh cursus sapien, ac sagittis est justo vitae nisl. Sed hendrerit elementum cursus. Integer et aliquam orci. Donec malesuada non lorem non finibus. Nullam vel quam et justo auctor aliquam vel a est. Donec efficitur nunc diam, sed tristique augue dictum eget.
        Etiam in elit mauris. Aenean quam turpis, iaculis et enim nec, volutpat tempus risus. Aenean imperdiet maximus erat. Cras pellentesque neque nec lacinia sagittis. Morbi sed finibus dolor, a viverra ligula. Nulla porta sem quis dolor pharetra iaculis. Mauris vitae nisi magna. In metus enim, ultrices a ipsum at, lacinia dapibus turpis. Maecenas ipsum arcu, faucibus a nunc non, fermentum tincidunt sem.`,
        status: "NEW",
        order: 1,
        categories: ["category 1"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Challenge 2",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non justo eu sapien aliquet lobortis in sit amet massa. Nunc et maximus nibh. Donec dignissim, velit vel mattis viverra, libero justo mattis arcu, sed auctor neque eros sit amet magna. Fusce pretium lacus in tempor rutrum. Pellentesque blandit sollicitudin sem sit amet posuere. Praesent sit amet pharetra felis. Nunc lobortis neque quis feugiat lacinia. Donec vel risus lectus. Morbi viverra, ipsum consectetur efficitur convallis, sapien nibh cursus sapien, ac sagittis est justo vitae nisl. Sed hendrerit elementum cursus. Integer et aliquam orci. Donec malesuada non lorem non finibus. Nullam vel quam et justo auctor aliquam vel a est. Donec efficitur nunc diam, sed tristique augue dictum eget.
        Etiam in elit mauris. Aenean quam turpis, iaculis et enim nec, volutpat tempus risus. Aenean imperdiet maximus erat. Cras pellentesque neque nec lacinia sagittis. Morbi sed finibus dolor, a viverra ligula. Nulla porta sem quis dolor pharetra iaculis. Mauris vitae nisi magna. In metus enim, ultrices a ipsum at, lacinia dapibus turpis. Maecenas ipsum arcu, faucibus a nunc non, fermentum tincidunt sem.`,
        status: "NEW",
        order: 2,
        categories: ["category 1"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Challenge 3",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non justo eu sapien aliquet lobortis in sit amet massa. Nunc et maximus nibh. Donec dignissim, velit vel mattis viverra, libero justo mattis arcu, sed auctor neque eros sit amet magna. Fusce pretium lacus in tempor rutrum. Pellentesque blandit sollicitudin sem sit amet posuere. Praesent sit amet pharetra felis. Nunc lobortis neque quis feugiat lacinia. Donec vel risus lectus. Morbi viverra, ipsum consectetur efficitur convallis, sapien nibh cursus sapien, ac sagittis est justo vitae nisl. Sed hendrerit elementum cursus. Integer et aliquam orci. Donec malesuada non lorem non finibus. Nullam vel quam et justo auctor aliquam vel a est. Donec efficitur nunc diam, sed tristique augue dictum eget.
        Etiam in elit mauris. Aenean quam turpis, iaculis et enim nec, volutpat tempus risus. Aenean imperdiet maximus erat. Cras pellentesque neque nec lacinia sagittis. Morbi sed finibus dolor, a viverra ligula. Nulla porta sem quis dolor pharetra iaculis. Mauris vitae nisi magna. In metus enim, ultrices a ipsum at, lacinia dapibus turpis. Maecenas ipsum arcu, faucibus a nunc non, fermentum tincidunt sem.`,
        status: "DONE",
        order: 3,
        categories: ["category 1"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Challenge 4",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non justo eu sapien aliquet lobortis in sit amet massa. Nunc et maximus nibh. Donec dignissim, velit vel mattis viverra, libero justo mattis arcu, sed auctor neque eros sit amet magna. Fusce pretium lacus in tempor rutrum. Pellentesque blandit sollicitudin sem sit amet posuere. Praesent sit amet pharetra felis. Nunc lobortis neque quis feugiat lacinia. Donec vel risus lectus. Morbi viverra, ipsum consectetur efficitur convallis, sapien nibh cursus sapien, ac sagittis est justo vitae nisl. Sed hendrerit elementum cursus. Integer et aliquam orci. Donec malesuada non lorem non finibus. Nullam vel quam et justo auctor aliquam vel a est. Donec efficitur nunc diam, sed tristique augue dictum eget.
        Etiam in elit mauris. Aenean quam turpis, iaculis et enim nec, volutpat tempus risus. Aenean imperdiet maximus erat. Cras pellentesque neque nec lacinia sagittis. Morbi sed finibus dolor, a viverra ligula. Nulla porta sem quis dolor pharetra iaculis. Mauris vitae nisi magna. In metus enim, ultrices a ipsum at, lacinia dapibus turpis. Maecenas ipsum arcu, faucibus a nunc non, fermentum tincidunt sem.`,
        status: "DONE",
        order: 4,
        categories: ["category 4"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("challenges", null, {});
  },
};
