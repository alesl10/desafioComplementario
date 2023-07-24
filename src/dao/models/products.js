import mongoose from "mongoose";

const productsCollection='products'

const productsSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    stock:Number
})

const productsModel=mongoose.model(productsCollection, productsSchema);

export default productsModel;