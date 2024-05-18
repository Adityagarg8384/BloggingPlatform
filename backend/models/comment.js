const mongoose= require("mongoose");

const commentSchema= mongoose.Schema({
    message:{
        type:String, 
        required:true,
    },
    blogid:{
        type:String, 
        required:true,
    },
    userid:{
        type:String,
        required:true,
    },
})

const CommentSchema= mongoose.model("CommentSchema", commentSchema);

module.exports= CommentSchema