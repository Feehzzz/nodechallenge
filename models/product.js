module.exports = (sequelize, Datatypes) => {
    const Product = sequelize.define('Product',{
        product: Datatypes.STRING,
        price: Datatypes.FLOAT,
        manufacturer: Datatypes.STRING,

    });
    return Product;
};