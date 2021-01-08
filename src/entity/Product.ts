import { PrimaryGeneratedColumn, Entity, BaseEntity, Column } from "typeorm";
// import "../../playground/populate";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;
  @Column({ type: "text" }) title: string;
  @Column("varchar", { length: 255 }) description: string;
}

const p = new Product();
p.description = "product desc";
p.title = "p title";
Product.create({ description: "baba mama", title: "create nana" });
Product.createQueryBuilder("insert int").insert().into(Product).values();
console.log(p);
