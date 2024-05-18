const mongoose= require("mongoose");

const blogSchema= mongoose.Schema({
    heading:{
        type:String,
        required:true,
    },
    blogcontent:{
        type:String,
        required:true,
    },
    tags:[{
        type:String,
    }],
    like:{
        type:Number,
        default:0,
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'CommentSchema',
    }]
})
const BlogSchema= mongoose.model("BlogSchema", blogSchema);
module.exports= BlogSchema;