import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { Pedido } from "../../Pedido/entity/Pedido";

@Entity()
export class Mesa {

  @PrimaryColumn()
  mesa_id: number;

  @Column()
  mesa_abertura: Date;

  @Column()
  mesa_fechamento: Date;

  @Column()
  mesa_status: boolean;

  @OneToMany(() => Pedido, (pedido) => pedido.mesa)
  pedidos: Pedido[]

}
