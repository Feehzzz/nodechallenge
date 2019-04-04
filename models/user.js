const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, Datatypes) => {
    const User = sequelize.define('User', {
        name: Datatypes.STRING,
        email: Datatypes.STRING,
        password: Datatypes.STRING
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
        return jwt.sign({ id: this.id }, process.env.SECRET);
    };
    return User;
}
