import express from 'express';
import product from '../models/product.js';

const router = express.Router();
router.get('/products', async(req, res) => {
   try {
    const products=await product.find();
    res.status(200).json(products);
    
   } catch (error) {
    res.status(404).json({ message: error.message });
   }
}
);

export default router;