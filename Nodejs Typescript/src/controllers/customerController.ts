// src/controllers/customerController.ts
import { Request, Response } from 'express';
import { customers } from '../models/customers';
import { orders } from '../models/orders';
import { order_items } from '../models/order_items';
import { products } from '../models/products';

export const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customerList = await customers.findAll();
    res.json(customerList);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const getAllCustomersWithOrder = async (req: Request, res: Response) => {
    try {
      const customerList = await customers.findAll({
        include: [{
          model: orders,
          as: 'orders',
          include: [{
            model: order_items,
            as: 'order_items',
            include: [{
              model: products,
              as: 'product',
              attributes: ['product_id', 'product_name', 'product_description', 'product_price']
            }]
          }]
        }]
      });
      res.json(customerList);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  };

export const getCustomerById = async (req: Request, res: Response) => {
  try {
    const customer = await customers.findByPk(req.params.id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customers.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customers.findByPk(req.params.id);
    if (customer) {
      await customer.update(req.body);
      res.json(customer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customers.findByPk(req.params.id);
    if (customer) {
      await customer.destroy();
      res.json({ message: 'Customer deleted' });
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};
