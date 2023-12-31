import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UpgradesUsers } from "./UpgradesUser";

@Entity("upgrades")
export class Upgrade extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 100, nullable: false })
    name!: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    description!: string;

    @Column({ type: "int", nullable: false })
    cost!: number;

    @OneToMany(() => UpgradesUsers, upgradesUsers => upgradesUsers.upgrade)
    upgradesUsers!: UpgradesUsers[];


}
