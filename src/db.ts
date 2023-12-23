import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users1703337928564 } from "./migration/1703337928564-users"
import { Upgrades1703338802930 } from "./migration/1703338802930-upgrades"
export const AppDataSource = new DataSource({
type: "mysql",
host: "localhost",
port: 3306,
username: "root",
password: "123",
database: "tob_backend",
migrations:[Users1703337928564, Upgrades1703338802930],
entities: [],
synchronize: false,
logging: false,
})