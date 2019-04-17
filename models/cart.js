const {User, Product} = require('./');
 
module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,

      },
      customer: DataTypes.INTEGER,
      product: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      qty: DataTypes.FLOAT,
            
      
    });
    
    return Cart;
  };