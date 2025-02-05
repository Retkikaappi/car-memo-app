import { NewCarMemo } from '../types';
import newCarSchema from '../../utils/validateNewMemo';
import { v1 as uuid } from 'uuid';
import carMemoMock from '../../data/carMemos';
const addNew = (memo: NewCarMemo) => {
  const parsed = newCarSchema.parse(memo);

  const newMemo = {
    ...parsed,
    id: uuid(),
  };

  carMemoMock.push(newMemo);

  return newMemo;
};

const removeOne = ({ id }: { id: string }) => {
  const index = carMemoMock.findIndex((e) => e.id === id);

  const removed = carMemoMock.splice(index, 1);
  return removed;
};

export default { addNew, removeOne };
