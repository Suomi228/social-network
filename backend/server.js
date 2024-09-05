import express from "express";
import authRoutes from "./routes/auth.routes.js"
import dotenv from 'dotenv';
import connectMongoDB from "./db/connectMongoDB.js";
dotenv.config();
const app = express();

const port = process.env.PORT || 8001;

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send("Welcome")
});
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    connectMongoDB();
});