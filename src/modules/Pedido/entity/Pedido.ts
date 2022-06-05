import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Mesa } from "../../Mesa/entity/Mesa";
import { Produto } from "../../Produto/entity/Produto";


@Entity()
export class Pedido {

  @PrimaryGeneratedColumn()
  pedido_id: number;

  @Column()
  pedido_quantidade: string;

  @JoinColumn({name: "mesa_id"})
  @ManyToOne(() => Mesa, (mesa) => mesa.pedidos, {onDelete: "CASCADE"})
  mesa: Mesa

  @ManyToMany(() => Produto)
  @JoinTable({name: "pedido_produto"})
  produtos: Produto[]
  
}
