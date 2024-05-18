const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    emailid:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilepic:{
        type:String,
        default:"",
        // required:true,
    },
    age:{
        type:Number,
        default:"",
    },
    blog:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'BlogSchema',
        }
    ],
    saveblog:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'BlogSchema',
        }
    ],
    likedblog:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'BlogSchema',
        }
    ]
})
const UserSchema=mongoose.model("UserSchema", userSchema);
module.exports= UserSchema;