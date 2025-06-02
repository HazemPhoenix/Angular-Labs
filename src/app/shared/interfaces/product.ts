import { AvailabilityStatus } from '../enums/availability-status';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  rating: number;
  stock: number;
  availabilityStatus: AvailabilityStatus;
}
