import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').patch(updateProduct).delete(deleteProduct);

export default router;
