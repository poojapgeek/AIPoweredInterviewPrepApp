const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
       dbName: "ai-interview-prep",

    });
        console.log("Database connected");
    }
    catch(err){
        console.error("Error connecting to mongoDB",err);
        process.exit(1);
    }
    
};
module.exports=connectDB;
