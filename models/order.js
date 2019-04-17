const { Product, User } = require('./');

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
          key: 'id'
        },
        unique: 'user_product'
    
      }, 
      qty: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id'
        },
        unique: 'user_product'
      }
     
     });
     Order.associate = function (models) {
      Order.belongsTo(models.User)
  };
    return Order;
  };




