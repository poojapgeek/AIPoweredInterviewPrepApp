require("dotenv").config();
const express=require("express");
const cors=require("cors");
const path=require("path");
const connectDB = require("./config/db");
const app=express();
const authRoutes=require("./routes/authRoutes")

//Middleware to handle cors
app.use(
    cors({
        origin:"*",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"],

    })
);
connectDB();
//middleware
app.use(express.json());
//Routes
app.use("/api/auth",authRoutes);
app.use('/api/sessions',sessionRoutes);
app.use('/api/questions')
app.use('/api/ai/generate-questions',protect,generateInterviewQuestions);
app.use('/api/ai/generate-explanation',protect,generateConceptExplanation);
//serve uploads folder
app.use("uploads",express.static(path.join(__dirname,"uploads"),{}));

//start server
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))
