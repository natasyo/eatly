import { Basket } from '@/types';

export const loadState = () => {
  try {
    const state = localStorage.getItem('redux');
    console.log();
    if (!state) return undefined;
    console.log(JSON.parse(state));
    return JSON.parse(state);
  } catch (err) {
    console.log('Could not load state', err);
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
