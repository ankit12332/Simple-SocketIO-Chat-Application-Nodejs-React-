import { Router } from 'express';
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getAllCustomersWithOrder
} from '../controllers/customerController';

const router = Router();

router.get('/customers', getAllCustomers);
router.get('/customersWithOrder', getAllCustomersWithOrder);
router.get('/customers/:id', getCustomerById);
router.post('/customers', createCustomer);
router.put('/customers/:id', updateCustomer);
router.delete('/customers/:id', deleteCustomer);

export default router;
