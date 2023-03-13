const db = require("mongoose");
const model = db.Schema;

const userSchema = new model({
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type : String,
        required:false,
    },
    password: {
        type: String,
        require: true
    }
});

const userVolumeSchema = new model({
    name: {
        type: String,
        required: true,
    },
    creatorID : {
        type: db.Schema.Types.ObjectId,
        ref: "userSchema"
    },

});


module.exports = User = db.model('User', userSchema);
module.exports = UserVolume = db.model('User Volume', userVolumeSchema);