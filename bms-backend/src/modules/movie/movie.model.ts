import mongoose from "mongoose";
import {IMovie} from "./movie.interface";

const movieSchema = new mongoose.Schema<IMovie>({
   _id: {type:String,required:true},
    title: {type:String,required:true},
    description: {type:String,required:true},
    duration: {type:String,required:true},
    genre: {type:[String],required:true},
    releaseDate: {type:Date,required:true},
    languages:{type:[String],required:true},
    certification: {type:String,required:true},
    posterUrl: {type:String,required:true},
    rating: {type:Number,required:true},
    votes:{type:Number,required:true},
    format:{type:[String],required:['2D']},
},{timestamps:true});


export const MovieModel = mongoose.model<IMovie>('Movie',movieSchema);


