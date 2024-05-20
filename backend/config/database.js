const mongoose= require("mongoose");
require("dotenv").config();
const dbconnect= ()=>{
    mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("connected to databse");
    })
    .catch((err)=>{
        console.log(err);
        console.log("Some error occurred");
    })
}

module.exports= dbconnect;