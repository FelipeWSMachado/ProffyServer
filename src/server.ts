import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import routes from './routes';
import { testConnection } from './database/connection'
testConnection()

const PORT = process.env.PORT || 3333;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(routes);




app.listen(PORT, () => console.log(`🚀 Server running at port ${PORT}`));


