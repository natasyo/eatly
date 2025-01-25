import { Basket } from '@/types';

export const loadState = () => {
  try {
    if (typeof window === 'object') {
      const state = localStorage.getItem('redux');
      if (state) return JSON.parse(state);
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: Basket) => {
  try {
    const data = { basket: state };
    console.log(data);
    const serializeteState = JSON.stringify(data);
    localStorage.setItem('redux', serializeteState);
  } catch (err) {
    console.log('Could not save state', err);
  }
};
