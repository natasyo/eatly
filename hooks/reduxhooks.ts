import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppselector = useSelector.withTypes<RootState>();
