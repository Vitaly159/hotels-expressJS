import express from "express"
import { getRooms } from "../controllers/room.controller"

const router = express.Router()

router.get('./rooms', getRooms)

export default router;
