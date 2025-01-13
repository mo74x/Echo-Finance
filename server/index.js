import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import KpiRoutes from './routes/Kpi.js';
import KPI from './models/KPI.js';
import { kpis,products ,transactions} from './data-mock/data.js';
import productRoutes from './routes/Product.js';
import Product from './models/product.js';
import transactionRoutes from './routes/Transaction.js';
import Transaction from './models/Transaction.js';

//config
dotenv.config();
const app = express();
app.use(express.json());    
app.use(bodyParser.json());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
console.log("Server is running");
const PORT = process.env.PORT || 5000;

//routes
app.use("/product",productRoutes);
app.use("/kpi",KpiRoutes);
app.use("/transaction",transactionRoutes);
//mongoose setup
mongoose.connect(process.env.MONGO_URI,{ 
}).then(async() => {
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
  // await mongoose.connection.db.dropDatabase();
   // KPI.insertMany(kpis);
   //Product.insertMany(products);
   // Transaction.insertMany(transactions);

}).catch((error) => {
 console.log(error.message);
}
);
