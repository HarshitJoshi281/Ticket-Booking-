

import { IMovie } from "./movie.interface";
import { MovieModel } from "./movie.model";

//1. create Movies
export const createMovie = async(movie:IMovie)=>{
    return await MovieModel.create(movie);
}

//2 get all movies
export const getAllMovies = async()=>{
      return await MovieModel.find().sort({releaseDate:-1});
}
// 3 get Movieby Id
export const getMovieById = async(id:string)=>{
    return await MovieModel.findById(id);
}
//4 getTopMovieByVotes
export const getTopMovieByVotes = async(limit:number)=>{
    return await MovieModel.find().sort({votes:-1}).limit(limit);
}