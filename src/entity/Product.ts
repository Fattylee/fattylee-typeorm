import { PrimaryGeneratedColumn, Entity, BaseEntity, Column } from "typeorm";
// import "../../playground/populate";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;
  @Column({ type: "text" }) title: string;
  @Column("varchar", { length: 255 }) description: string;
}
