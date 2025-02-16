import express from "express"
import{usermodel} from "./db"
import {user} from "./zod"
import cors from "cors"
import mongoose from "mongoose"

const app= express()

app.use(cors())
app.use(express.json())


app.post("/api/v1/signup",async (req,res)=>{

    const data= user.safeParse(req.body)
    
    const username=data.data?.username
    const email=data.data?.email
    const password=data.data?.password

    try{

        await usermodel.create({
            username,
            email,
            password
        })


    }catch(e){
        res.json({
            message:"incorrect inputs"
        })


    }

    res.json({
        message:"youe have signed up"
    })


})





async function start(){

try{

    await mongoose.connect("mongodb+srv://admin:zHj0B48rwT9ykOqc@admin1.as6ck.mongodb.net/paytm")

    console.log("db is connected")
}catch(e){

    console.log("error in db")
}
}

start()

app.listen(3000)