import mongoose from "mongoose";
import 'dotenv/config';

export async function configureDb(){
    try {
        mongoose.set("strictQuery", false); 
       const g = await mongoose.connect(process.env.DB_URL);
        console.log("connected");
        
    } catch (error) {
        console.log("not connected");
    }
}