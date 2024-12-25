import { Dishe, Restaurant } from '@/types';
import data from './data.json';

export function getTopRestaurants(count?: number): Restaurant[] {
  if (count && count > 0) {
    return data.restaurants.slice(0, count) as unknown as Array<Restaurant>;
  }
  return data.restaurants as unknown as Array<Restaurant>;
}

export function getTopDishes(count?: number) {
  if (count && count > 0) {
    return data.dishes.slice(0, count) as unknown as Array<Dishe>;
  }
  return data.dishes as unknown as Array<Dishe>;
}
