import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Upgrades1703338802930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "upgrades",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "cost",
                        type: "int",
                        length: "5",
                        isNullable: false,
                    }
                ],
            }),
            true
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
