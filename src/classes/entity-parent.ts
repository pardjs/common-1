import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class EntityParent {
  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt!: Date;

  @CreateDateColumn({ name: "created_at" })
  public createdAt!: Date;
}
