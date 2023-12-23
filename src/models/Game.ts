import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity("games")
export class Game extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    userId!: number;

    @Column()
    score!: number;

    @Column()
    time!: number;

    @Column()
    created_at!: Date;

    @Column()
    updated_at!: Date;

    @ManyToOne(() => User, user => user.id, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user!: User;
}
