import express from "express";
import { Room } from "../models/room.model";

const app = express()
app.use(express.json())

//получение всех номеров
const getRooms = async () => {
  const data = await Room.findAll()
  return data
}

export { getRooms }
