const mongoose= require("mongoose");

const blogSchema= mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    subtitle:{
        type:String,
        required:true,
    },
    thumbnail:{
        type : String,
        required : false
    },
    data:{
        type:String,
        required:true,
    },
    tags:[{
        type:String,
        default:[],
    }],
    like:{
        type:Number,
        default:0,
    },
    likeuser:[{
        type:String,
    }],
    saveuser : [{
        type:String,
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'CommentSchema',
    }],
   
})
const BlogSchema= mongoose.model("BlogSchema", blogSchema);
module.exports= BlogSchema;