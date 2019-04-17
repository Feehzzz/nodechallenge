'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      products: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      priceUnit: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      qty: {
        type: Sequelize.REAL,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};
