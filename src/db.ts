import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users1703337928564 } from "./migration/1703337928564-users"
import { Upgrades1703338802930 } from "./migration/1703338802930-upgrades"
import { Games1703338906461 } from "./migration/1703338906461-games"
import { UpgradesUsers1703339244579 } from "./migration/1703339244579-upgrades_users"
export const AppDataSource = new DataSource({
type: "mysql",
host: "localhost",
port: 3306,
username: "root",
password: "123",
database: "tob_backend",
migrations:[Users1703337928564, Upgrades1703338802930, Games1703338906461, UpgradesUsers1703339244579],
entities: [],
synchronize: false,
logging: false,
})