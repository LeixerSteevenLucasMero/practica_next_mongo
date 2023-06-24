import {Document} from 'mongoose'

export interface Product extends Document{
    readonly name:String;
    readonly descripcion: String;
    readonly imageUrl: String;
    readonly price: Number;
    readonly createDare:Date;
}