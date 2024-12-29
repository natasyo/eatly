import { Dishe, Purchase, PurchasesInfo, PurchaseView, Restaurant } from '@/types';
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

export function getPurchases(count?: number): Array<PurchaseView> {
  let purchases = [];
  if (count && count > 0) purchases = data.purchases.slice(0, count) as unknown as Array<Purchase>;
  purchases = data.purchases as unknown as Array<Purchase>;
  const purchasesView = purchases.map((item) => {
    const dishe = data.dishes.findLast((value) => value.id == +item.productId);
    return { ...item, dishe } as unknown as PurchaseView;
  });
  return purchasesView.slice(0, count) as unknown as Array<PurchaseView>;
}

export function getPurchasesInfo(key: string): PurchasesInfo {
  return data.purchasesInfo.filter((item) => item.month === key)[0] as unknown as PurchasesInfo;
}
export function getPurchasesPeriod() {
  return data.purchasesInfo.map((item) => item.month);
}
