import express from "express";
import { AppDataSource } from "./db";

const app = express();

const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());


AppDataSource.initialize()
.then(() => {
 console.log('Database connected');
})
.catch(error => {
 console.log(error)
})

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});