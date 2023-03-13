const db = require("mongoose");
const model = db.Schema;

const userSchema = new model({
    email: { 
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        require: true
    }
});



module.exports = User = db.model('User', userSchema);