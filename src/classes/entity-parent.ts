import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class EntityParent {
  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt!: Date;

  @CreateDateColumn({ name: "created_at" })
  public createdAt!: Date;
}

// tslint:disable-next-line: max-classes-per-file
export class PostgresEntityParent {
  @UpdateDateColumn({ type: "timestamp with time zone" })
  public updatedAt!: Date;

  @CreateDateColumn({ type: "timestamp with time zone" })
  public createdAt!: Date;
}
