import { Product } from './product.interface';

export interface ProductItem {
  id?: number;
  productId: string;
  quantity: number;
  unitPrice: number;
  product?: Product;
}

