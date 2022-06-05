import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Categoria } from "../../Categoria/entity/Categoria"
import { Pedido } from "../../Pedido/entity/Pedido"


@Entity()
export class Produto {

  @PrimaryGeneratedColumn()
  readonly produto_id: number

  @Column()
  produto_descricao: string

  @Column()
  produto_valor: number

  @JoinColumn({name: "categoria_id"})
  @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
    onDelete: "CASCADE"
  })
  categoria: Categoria

  @OneToMany(() => Pedido, (pedido) => pedido.produtos)
  produtos: Pedido[]
}
