import { RangeType } from './ui-types';

export * from './ui-types';
export interface Restaurant {
  id: string;
  name: string;
  type: string;
  time_wait: number;
  rating: number;
  image: string;
}

export interface Dishe {
  id: string;
  name: string;
  type: string;
  time_wait: number;
  rating: number;
  image: string;
  price: number;
}

export interface Purchase {
  id: string;
  productId: string;
  status: string;
  dateTime: string;
}

export interface PurchaseView {
  id: string;
  dishe: Dishe;
  status: string;
  dateTime: string;
}
export interface PurchasesInfo {
  id: string;
  month: string;
  expense: { value: number; increased: number };
  vocher: { value: number; increased: number };
}

export interface Review {
  id: number;
  photo: string;
  name: string;
  position: string;
  sayText: string;
  rating: string;
}

export interface Category {
  id: number;
  image: string;
  title: string;
  colorBg: string;
  colorTitle: string;
}
export interface Range {
  from: number;
  to: number;
}

export interface Search {
  category?: Category;
  sortBy?: string;
  price?: RangeType;
  searchText?: string;
  type?: string;
}

export interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface User {
  id: string;
  name: string;
}

export interface Basket {
  id?: string;
  user?: User;
  items?: [
    {
      product: Dishe;
      count: number;
    },
  ];
}
