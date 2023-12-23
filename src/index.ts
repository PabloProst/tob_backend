import express from "express";
import { AppDataSource } from "./db";
import { router as routerUser} from "./routes/authRoutes";
import { router as routerUpgrades } from "./routes/upgradeRoutes";

const app = express();

// Port
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

// Routes
app.use('/', routerUser);
app.use('/', routerUpgrades);

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