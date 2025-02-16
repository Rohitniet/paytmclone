import mongoose, { model, Mongoose, Schema } from "mongoose";

const user= new Schema({

    username:{
        type:String,
        unique:true,
        required:true
    },

    email:{
        type:String,
        required:true  
    },
    password:{
        type:String
    }

})







export const usermodel= mongoose.model("user",user)