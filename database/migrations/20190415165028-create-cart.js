'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Carts', {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      customer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' }
      },
      product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Products', key:'id' }
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      qty: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
      
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Carts');
  }
};
