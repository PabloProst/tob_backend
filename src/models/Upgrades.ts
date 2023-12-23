import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
