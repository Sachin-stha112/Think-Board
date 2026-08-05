import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
// console.log(process.env.MONGO_URL);

const app = express();
const PORT = Number(process.env.PORT) || 5001;

//middleware
app.use(express.json()); 
app.use(rateLimiter)
// custom middleware
// app.use((req, res, next) => 
//     {
//         console.log(`Request method is ${req.method}\n Request URL is ${req.url}`);
//         next();
//     }

// );
app.use("/api/notes", notesRoutes); //api

// const startServer = (portNumber) => {
//     const server = app.listen(portNumber, () => {
//         console.log("Server started on PORT:", portNumber);
//     });

//     server.on("error", (error) => {
//         if (error.code === "EADDRINUSE") {
//             const nextPort = portNumber >= 65535 ? 3000 : portNumber + 1;
//             console.log(`Port ${portNumber} is busy. Trying ${nextPort}...`);
//             startServer(nextPort);
//         } else {
//             console.error(error);
//             process.exit(1);
//         }
//     });
// };

// startServer(PORT);
connectDB().then(
    ()=>{ // for optimization 1st db then run the app
        app.listen(PORT, () =>
{
    console.log("Server started on port: ", PORT);
});
    }
)