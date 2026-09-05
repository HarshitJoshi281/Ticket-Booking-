
import { Types } from "mongoose";

export interface IShow {
    _id?: string;
    movie: Types.ObjectId;
    theater: Types.ObjectId;
    location: string;
    format: "2D" | "3D" | "IMAX" | "PVR PXL"; // Note: Cut off at the end
    audioType?: string;
    startTime: string;
    date: string;
    priceMap: Record<string, number>;
    seatLayout:{
        row:string;
        seats:{
            number:number;
            status:"AVAILABLE"|"BOOKES"|"BLOCKED";
        }[];
    }[];
    createdAt?:Date;
    updatedAt?:Date;
}