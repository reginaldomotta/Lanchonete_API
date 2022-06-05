import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCliente1654042572845 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cliente",
                columns: [
                    {
                        name: "cliente_id",
                        type: "int",
                        isGenerated: true,
                        isPrimary: true
                    },
                    {
                        name: "cliente",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cliente")
    }

}
