import express from "express";
import { AppDataSource } from "./db";
import { router } from "./routes/authRoutes";

const app = express();

// Port
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

// Routes
app.use('/', router);

// Server running
app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});

// Database connection
AppDataSource.initialize()
.then(() => {
 console.log('Database connected');
})
.catch(error => {
 console.log(error)
})