import { Table, Column, Model, DataType, AllowNull } from 'sequelize-typescript';

@Table({
    timestamps: true
})
export default class Employee extends Model {

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey:true
  })
  id!: number

  @Column({
    type: DataType.TEXT,
    allowNull:false
  })
  name!: string

  @Column({
    type: DataType.INTEGER,
    allowNull:false
  })
  telephone!: string

  @Column({
    type: DataType.TEXT,
    allowNull:false
  })
  address!: string

  @Column({
    type: DataType.DATE,
    allowNull:false
  })
  employmentDate!: string
}