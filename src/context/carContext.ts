import { createContext } from 'react';
import carMemoMock from '../utils/carMemos';
import CarMemo from '../types/types';

export const CarContext = createContext({
  carMemos: carMemoMock,
  setCarMemos: (_e: CarMemo[]) => {},
});
