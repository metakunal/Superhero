const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
    {
        name: { type: "String", required: true },
        email: { type: "String", unique: true, required: true },
        password: { type: "String", required: true },
        pic: {
            type: "String",
            required: true,
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
        // isAdmin: {
        //     type: Boolean,
        //     required: true,
        //     default: false,
        // },
    },
    { timestaps: true }
);

//To compare the entered password with real password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//Hashing the password and adding salt for storage in DB
userSchema.pre("save", async function (next) {
    if (!this.isModified) {
        next();
    }

    const salt = await bcrypt.genSalt(11);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;