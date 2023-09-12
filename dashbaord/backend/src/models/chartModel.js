import mongoose from "mongoose";

const chartSchema = new mongoose.Schema({
       end_year:{type:String,required:true},
       intensity:{type:Number,required:true},
       sector:{type:String},
       topic:{type:String,required:true},
       insight:{type:String},
       url:{type:String},
       region:{type:String,required:true},
       start_year:{type:String,required:true},
       impact:{type:String},
       added:{type:Date},
       published:{type:Date},
       country:{type:String,required:true},
       relevance:{type:Number,required:true},
       pestle:{type:String},
       source:{type:String},
       title:{type:String},
       likelihood:{type:Number,required:true}
})

export const chartModel = mongoose.model('chartdata',chartSchema)