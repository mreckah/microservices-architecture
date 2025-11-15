import { Customer } from './customer.interface';
import { ProductItem } from './product-item.interface';

export interface Bill {
  id?: number;
  billingDate: Date | string;
  customerId: number;
  productItems?: ProductItem[];
  customer?: Customer;
}

