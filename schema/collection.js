const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/blog")
.then(()=>{
    console.log('connection..');
}).catch((err)=>{
    console.log(err);
})
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true

    },
    Mobile_NO:{
        type:Number,
        min:10,
    },
    Gender:{
        type:String
    },
    Age:{
        type:Number
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }
})

const Users=new mongoose.model("Users",userSchema)
module.exports=Users