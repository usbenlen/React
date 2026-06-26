/** @format */

export type ProductType = {
  id: number;
  id_category?: number | string;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  discountPercent: number;
  rating: number;
  reviewsCount: number;
  count?: number;
  isFavorite: boolean;
  available: boolean;
};
