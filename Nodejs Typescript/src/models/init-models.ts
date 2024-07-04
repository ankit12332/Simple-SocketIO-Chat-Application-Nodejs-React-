import type { Sequelize } from "sequelize";
import { customers as _customers } from "./customers";
import type { customersAttributes, customersCreationAttributes } from "./customers";
import { order_items as _order_items } from "./order_items";
import type { order_itemsAttributes, order_itemsCreationAttributes } from "./order_items";
import { orders as _orders } from "./orders";
import type { ordersAttributes, ordersCreationAttributes } from "./orders";
import { products as _products } from "./products";
import type { productsAttributes, productsCreationAttributes } from "./products";
import { sales_report as _sales_report } from "./sales_report";
import type { sales_reportAttributes, sales_reportCreationAttributes } from "./sales_report";

export {
  _customers as customers,
  _order_items as order_items,
  _orders as orders,
  _products as products,
  _sales_report as sales_report,
};

export type {
  customersAttributes,
  customersCreationAttributes,
  order_itemsAttributes,
  order_itemsCreationAttributes,
  ordersAttributes,
  ordersCreationAttributes,
  productsAttributes,
  productsCreationAttributes,
  sales_reportAttributes,
  sales_reportCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const customers = _customers.initModel(sequelize);
  const order_items = _order_items.initModel(sequelize);
  const orders = _orders.initModel(sequelize);
  const products = _products.initModel(sequelize);
  const sales_report = _sales_report.initModel(sequelize);

  orders.belongsTo(customers, { as: "customer", foreignKey: "customer_id"});
  customers.hasMany(orders, { as: "orders", foreignKey: "customer_id"});
  order_items.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(order_items, { as: "order_items", foreignKey: "order_id"});
  order_items.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(order_items, { as: "order_items", foreignKey: "product_id"});

  return {
    customers: customers,
    order_items: order_items,
    orders: orders,
    products: products,
    sales_report: sales_report,
  };
}
