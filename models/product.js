module.exports = (sequelize, Datatypes) => {
    const Product = sequelize.define('Product',{
        product: Datatypes.STRING,
        price: Datatypes.FLOAT,
        quantity: Datatypes.INTEGER

    });
    
    return Product;
};