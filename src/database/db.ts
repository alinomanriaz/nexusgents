// import mongoose from "mongoose";

// export const db = async () => {
//     try {
//         if (mongoose.connection.readyState === 0) {
//             await mongoose.connect(process.env.MONGODB_URI!);
//             console.log('✅ Database connected successfully')
//         }
//     } catch (error) {
//         console.log('❌ database connection error', error);
//         throw new Error("Database connection failed");
//     }
// }