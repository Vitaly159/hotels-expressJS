import express from "express"
import { configDotenv } from "../node_modules/dotenv/lib/main";
import sequelize from "./db/db";
//import router from "./routes/room.routes";

configDotenv()

const app = express()
const PORT = process.env.PORT || 8800

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Is connected on port ${PORT}`);
    })

    //app.use('/api/v1', router)

  } catch {
    console.log('error connection');
  }
}

start()
