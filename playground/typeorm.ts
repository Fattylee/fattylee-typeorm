import "reflect-metadata";
import {
  createConnection,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";

@Entity("groceries")
class Grocery extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @CreateDateColumn() createAt: Date;

  @JoinColumn()
  @ManyToOne(() => Product, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false,
  })
  product: number;
}

@Entity("products")
class Product extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column("varchar", { length: 255 }) title: string;
  @Column({ type: "money" }) price: number;
}

(async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    username: "fattylee",
    password: "fattylee",
    database: "typeorm",
    port: 5433,
    logging: true,
    synchronize: true,
    entities: [Grocery, Product],
    // dropSchema: true,
  });
  console.log("Database connected successfully");
  // const product = Product.create({ title: "title one" });
  // product.price = 23;
  //
  // const newProduct = await Product.create({
  //   title: "title four",
  //   price: 30,
  //   save: true,
  // }).save();
  // console.log("hurray!!!!!!!!!!!!: newProduct", newProduct);

  console.log(
    "new Grocery:"
    // await Grocery.create({ name: "milk", product: 7 }).save()
  );
  console.log(
    "List of products:",
    await Grocery.find({
      where: { name: "milk" },
      relations: ["product"],
    })
  );
})();
