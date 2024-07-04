import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sales_reportAttributes {
  report_id: number;
  order_id?: number;
  customer_name?: string;
  customer_email?: string;
  product_name?: string;
  order_date?: Date;
  quantity?: number;
  total_price?: number;
}

export type sales_reportPk = "report_id";
export type sales_reportId = sales_report[sales_reportPk];
export type sales_reportOptionalAttributes = "report_id" | "order_id" | "customer_name" | "customer_email" | "product_name" | "order_date" | "quantity" | "total_price";
export type sales_reportCreationAttributes = Optional<sales_reportAttributes, sales_reportOptionalAttributes>;

export class sales_report extends Model<sales_reportAttributes, sales_reportCreationAttributes> implements sales_reportAttributes {
  report_id!: number;
  order_id?: number;
  customer_name?: string;
  customer_email?: string;
  product_name?: string;
  order_date?: Date;
  quantity?: number;
  total_price?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof sales_report {
    return sales_report.init({
    report_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sales_report',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "report_id" },
        ]
      },
    ]
  });
  }
}
