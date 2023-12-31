import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users1703337928564 } from "./migration/1703337928564-users"
import { Games1703433119081 } from "./migration/1703433119081-games"
import { Upgrades1703338802930 } from "./migration/1703338802930-upgrades"
import { UpgradesUsers1703339244579 } from "./migration/1703339244579-upgrades_users"
import { User } from "./models/User"
import { Game } from "./models/Game"
import { Upgrade } from "./models/Upgrades"
import { UpgradesUsers } from "./models/UpgradesUser"

export const AppDataSource = new DataSource({
type: "mysql",
host: "localhost",
port: 3306,
username: "root",
password: "123",
database: "tob_backend",
migrations:[Users1703337928564, Upgrades1703338802930, Games1703433119081, UpgradesUsers1703339244579],
entities: [User, Game, Upgrade, UpgradesUsers],
synchronize: false,
logging: false,
})