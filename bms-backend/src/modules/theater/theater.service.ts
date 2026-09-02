//1 Create Theater
import { TheaterModel } from "./theater.model";
import { ITheater } from "./theater.interface";

export const createTheater = async(data:ITheater):Promise<ITheater>=>{
    return await TheaterModel.create(data);
}

//2 GetAllTheters
export const getAllTheaters = async():Promise<ITheater[]>=>{
    return await TheaterModel.find();
}
//3 GetTheterById
export const getTheaterById = async(id:string):Promise<ITheater|null>=>{
    return await TheaterModel.findById(id);
}
//4 GetTheterByState
export const getTheaterByState = async(state:string):Promise<ITheater[]>=>{
    return await TheaterModel.find({state:{$regex:state,$options:"i"}})
} 