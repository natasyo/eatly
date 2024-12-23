import { Restaurant } from '@/types';
import data from './data.json';

export function getRestaurants(count?: number): Restaurant[] {
  if (count && count > 0) {
    return data.restaurants.slice(0, count) as unknown as Array<Restaurant>;
  }
  return data.restaurants as unknown as Array<Restaurant>;
}
