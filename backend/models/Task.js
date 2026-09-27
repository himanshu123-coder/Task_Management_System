import mongoose from 'mongoose';
const taskSchema = new mongoose.Schema({
  user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},
  title:{type:String,required:true,trim:true,maxLength:160},
  description:{type:String,default:'',maxLength:1000},
  status:{type:String,enum:['todo','in-progress','completed'],default:'todo'},
  priority:{type:String,enum:['low','medium','high'],default:'medium'},
  category:{type:String,default:'General',trim:true},
  dueDate:{type:Date,default:null}
},{timestamps:true});
export default mongoose.model('Task',taskSchema);
