import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity, Column } from "typeorm";
import { Upgrade } from "./Upgrades";
import { User } from "./User";

@Entity("upgrades_users")
export class UpgradesUsers extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    upgrade_id!: number;

    @Column()
    user_id!: number;

    @ManyToOne(() => Upgrade, upgrade => upgrade.upgradesUsers)
    @JoinColumn({ name: "upgrade_id" })
    upgrade!: Upgrade;

    @ManyToOne(() => User, user => user.upgradesUsers)
    @JoinColumn({ name: "user_id" })
    user!: User;
}