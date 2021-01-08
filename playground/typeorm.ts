import "reflect-metadata";
import {
  createConnection,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  BaseEntity,
  OneToMany,
  JoinColumn,
  BeforeUpdate,
} from "typeorm";

@Entity("groceries")
class GroceryList extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column() title: string;
  @CreateDateColumn() createAt: Date;

  @OneToMany(() => Item, (item) => item.grocery)
  items: Item[];
}

@Entity("items")
class Item extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column("varchar", { length: 255 }) name: string;
  @Column({ type: "money" }) price: number;

  @ManyToOne(() => GroceryList, (grocery) => grocery.items)
  grocery: GroceryList;
}

@Entity("users")
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: string;
  @Column() first_name: string;
  @Column() last_name: string;
  @CreateDateColumn() createdAt: Date;

  @OneToMany(() => Todo, (todo) => todo.owner)
  @JoinColumn()
  todos: string[];
}

@Entity("todos")
class Todo extends BaseEntity {
  @PrimaryGeneratedColumn() id: string;
  @Column("varchar", { length: 255 }) title: string;
  @CreateDateColumn() created_at: Date;

  @ManyToOne("User", {
    onDelete: "CASCADE",
    nullable: false,
    // eager: true,
  })
  owner: number;

  @BeforeUpdate()
  runMe() {
    console.log("===============");
    // console.log(this);
    console.log("===============");
  }
}

(async () => {
  const connection = await createConnection({
    type: "postgres",
    host: "localhost",
    username: "fattylee",
    password: "fattylee",
    database: "typeorm",
    port: 5433,
    logging: true,
    synchronize: true,
    entities: [GroceryList, Item, User, Todo],
    dropSchema: true,
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

  const userOne = await User.findOne(3);
  const todo = await Todo.findOne(7);
  if (userOne && todo) {
    todo.owner = 5;
    await todo.save();
  }
  try {
    // if (userOne) await userOne.remove();
  } catch (err) {}
  console.log(
    "userOne",
    userOne,
    "todo",
    todo,
    "update Todo:"
    // await Todo.create({
    //   title: "learn the quran",
    //   owner: 4,
    // })
    // .save()
  );
  // console.log(
  //   "List of Todos:",
  //   await Todo.find({
  //     // where: { title: "milk" },
  //     // relations: ["owner"],
  //   })
  // );
  // console.log(
  //   "User 2",
  //   await User.findOne({ where: { id: 2 }, relations: ["todos"] })
  // );
  console.log(
    "using connection for the first time",
    // await connection.manager.find(User)
    await connection.getRepository(User).findOne(3)
  );
})();
