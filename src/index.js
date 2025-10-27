import "dotenv/config";
import connectDB from "./db/index.js";
import app from "./app.js";

const PORT = process.env.PORT || 4000;

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error occurred in the server:", error);
    })
    app.listen(PORT , () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((err) => {
    console.log("Database connection failed", err);
    process.exit(1);
})


































// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";
// const app = express();
// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("Database connected successfully");
//         app.on("error", (error) => {
//             console.log("Error occurred in the server:", error);
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("Database failed to connect")
//         throw error;
//     }
// })()