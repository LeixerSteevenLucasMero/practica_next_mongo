import {Schema} from 'mongoose'

export const ProductSchema= new Schema({
    name:{type:String, require:true},
    descripcion:String,
    imageURL:String,
    price:Number,
    createDate:{
        type:Date,
        default:Date.now
    }
})



