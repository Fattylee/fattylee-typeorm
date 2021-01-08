import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  // PrimaryColumn,
  BeforeInsert,
  BaseEntity,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
export class User extends BaseEntity {
  // @PrimaryColumn("uuid")
  @PrimaryGeneratedColumn()
  id: string;

  @Column("varchar", { unique: true, length: 255 })
  email: string;

  // @Column("boolean")
  // confirm?: boolean;

  @Column("text")
  password: string;

  @BeforeInsert()
  addId() {
    this.id = uuidv4();
  }
}
