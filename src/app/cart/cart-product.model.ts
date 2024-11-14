import { Product } from '../product.service'; // Corrija o caminho se necessário
export interface CartProduct extends Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  removeQuantity?: number;
  imageUrl: string;  // Adicionei o imageUrl aqui
  description: string;  // Adicionei o description aqui
}
