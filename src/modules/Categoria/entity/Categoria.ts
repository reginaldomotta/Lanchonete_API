import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "../../Produto/entity/Produto";

@Entity("categoria")
export class Categoria {
  
  @PrimaryGeneratedColumn()
  readonly categoria_id: number;

  @Column()
  categoria_descricao: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[]

}
