import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UpgradesUsers } from "./UpgradesUser";

@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    is_active!: boolean;

    @Column()
    role!: string;

    @Column()
    created_at!: Date;

    @Column()
    updated_at!: Date;

    @OneToMany(() => UpgradesUsers, upgradesUsers => upgradesUsers.user)
    upgradesUsers!: UpgradesUsers[];

}
