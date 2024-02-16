const { default: mongoose, Schema } = require("mongoose");


const MessageSchema = new mongoose.Schema({

    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        autopopulate: {
            select: '_id firstName lastName email' // select only listed fields
        }
    },
    content: {
        type: String,
        defaultValue: ""
    }


}, { timestamps: true, versionKey: false });

MessageSchema.plugin(require('mongoose-autopopulate'));

const ChatSchema = new mongoose.Schema({

    members: [{
        type: Schema.Types.ObjectId,
        ref: "User",
        autopopulate: {
            select: '_id firstName lastName email' // select only listed fields
        }
    }],
    messages: [MessageSchema]


}, { timestamps: true, versionKey: false });

ChatSchema.plugin(require('mongoose-autopopulate'));

const Chat = new mongoose.model("Chat", ChatSchema);

module.exports = Chat;