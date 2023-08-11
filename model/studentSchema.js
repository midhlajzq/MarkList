const mongoose= require('mongoose')

const sudentSchema = new mongoose.Schema({
    no:{
        type:Number,
        required:true,
        unique:true

    },
    name:{
        type:String,
        required:true
    },
    mark:{
        type:Number,
        required:true
    }
})

const students= new mongoose.model("students",sudentSchema)

module.exports=students