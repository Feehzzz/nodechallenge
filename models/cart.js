 
 
module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,

      },
      customer: DataTypes.INTEGER,
      product: DataTypes.INTEGER,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
      qty: DataTypes.FLOAT,
      total: DataTypes.FLOAT
      
    });
    
    
    return Cart;
  };

  