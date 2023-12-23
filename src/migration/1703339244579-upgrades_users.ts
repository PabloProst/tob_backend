import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UpgradesUsers1703339244579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "upgrades_users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "upgrade_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["upgrade_id"],
                        referencedTableName: "upgrades",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("upgrades_users");
    }

}
