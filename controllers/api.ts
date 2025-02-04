import {
  Category,
  Product,
  Purchase,
  PurchasesInfo,
  PurchaseView,
  Question,
  Restaurant,
  Review,
} from '@/types';
import data from './data.json';

export function getTopRestaurants(count?: number): Restaurant[] {
  if (count && count > 0) {
    return data.restaurants.slice(0, count) as unknown as Array<Restaurant>;
  }
  return data.restaurants as unknown as Array<Restaurant>;
}

export function searchRestaurants(text: string) {
  const rest = data.restaurants.filter((item) => {
    const index = item.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase(), 0);
    return index < 0 ? false : true;
  });
  return rest as unknown as Array<Restaurant>;
}

export function getTopDishes(count?: number) {
  if (count && count > 0) {
    return data.dishes.slice(0, count) as unknown as Array<Product>;
  }
  return data.dishes as unknown as Array<Product>;
}
export function getDishes(countInPage: number, page: number) {
  const dishes = data.dishes.slice(
    (page - 1) * countInPage,
    (page - 1) * countInPage + countInPage,
  ) as unknown as Array<Product>;
  if (dishes.length === 0) return undefined;
  return { ...dishes };
}

export function getCountDishes() {
  return data.dishes.length;
}

export function searchDishes(text: string) {
  const dishe = data.dishes
    .filter((item) => {
      const index = item.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase(), 0);
      return index < 0 ? false : true;
    })
    .slice(0, 30);
  return dishe as unknown as Array<Product>;
}
export function getDishe(id: string) {
  const dishe = data.dishes.find((item) => item.id === +id);
  console.log(dishe);
  return dishe as unknown as Product;
}
export function getPurchases(count?: number): Array<PurchaseView> {
  let purchases = [];
  if (count && count > 0) purchases = data.purchases.slice(0, count) as unknown as Array<Purchase>;
  purchases = data.purchases as unknown as Array<Purchase>;
  const purchasesView = purchases.map((item) => {
    const dishe = data.dishes.findLast((value) => value.id == +item.productId);
    return { ...item, product: dishe } as unknown as PurchaseView;
  });
  return purchasesView.slice(0, count) as unknown as Array<PurchaseView>;
}

export function getPurchasesInfo(key: string): PurchasesInfo {
  console.log(key);
  return data.purchasesInfo.filter((item) => item.month === key)[0] as unknown as PurchasesInfo;
}
export function getPurchasesPeriod() {
  return data.purchasesInfo.map((item) => item.month);
}

export function getReviews(): Review[] {
  return data.reviews as unknown as Review[];
}

export function getCategories(): Category[] {
  return data.categories as unknown as Category[];
}

export function getQuestions(count = 5) {
  if (count >= 0) {
    return data.questions.slice(0, count) as unknown as Question[];
  }
  return data.questions as unknown as Question[];
}
