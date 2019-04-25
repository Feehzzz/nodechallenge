module.exports = (sequelize, Datatypes) => {
    const Product = sequelize.define('Product',{
        product: {
            type: Datatypes.STRING,
            validate: {
                notEmpty: {
                  msg: 'Descreva o produto a ser cadastrado'
                },
            }
        },
        price: {
            type: Datatypes.FLOAT,
            validate: {
                notEmpty: {
                  msg: 'Descreva o valor do produto'
                }
            }
        },
            
        quantity: {
            type: Datatypes.INTEGER,
            validate: {
                notEmpty: {
                  msg: 'type a valid quantity'
                },
            }
        }
        
    });
    
    return Product;
};