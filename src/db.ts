import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users1703337928564 } from "./migration/1703337928564-users"
export const AppDataSource = new DataSource({
type: "mysql",
host: "localhost",
port: 3306,
username: "root",
password: "123",
database: "tob_backend",
migrations:[Users1703337928564],
entities: [],
synchronize: false,
logging: false,
})