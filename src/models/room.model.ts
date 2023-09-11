import sequelize from "../db/db";
import { DataTypes } from "sequelize";

const Room = sequelize.define('room', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  room: { type: DataTypes.STRING, unique: true, allowNull: false }
})

export { Room }