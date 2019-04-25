const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define('User', {
        email: {
        type: Datatypes.STRING,
        validate:  {
            notEmpty: {
                msg: 'Cannot be blank'
            },
            isEmail: {
                msg: 'Must be a valid mail'
            }
        }
        },
        password: {
        type: Datatypes.STRING,
        validate: {
            notEmpty: {
                msg: 'Cannot be blank'               
            },
            len: {
                args: [4,10],
                msg: 'Pass must contain between 4 and 10 characters'
            }
        } 
    }
    }, 
    {
        hooks: {
            beforeSave: async user => {
                if (user.password) {
                    user.password = await bcrypt.hash(user.password, 10)
                } 
            }
        }
    }
);
    User.prototype.checkPassword = function(password){
        return bcrypt.compare(password, this.password)
    };
    User.prototype.generateToken = function (){
        return jwt.sign({ id: this.id }, process.env.SECRET, {
            expiresIn: 18000
        })
        
    };
    
    
    return User;
}