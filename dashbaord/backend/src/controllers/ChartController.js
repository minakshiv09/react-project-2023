import { StatusCodes } from "http-status-codes";
import { chartModel } from "../models/chartModel.js";



export async function fetchAllData(req,res){
    try {
        const data = await chartModel.find();
        res.status(StatusCodes.ACCEPTED).json(data)

        
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:'Error in fetching contact'});
    }
}