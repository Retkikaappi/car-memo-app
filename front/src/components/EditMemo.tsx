import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { CarMemo } from '../types/types';
const EditMemo = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const queryClient = useQueryClient();
  const car = queryClient
    .getQueryData<CarMemo[]>(['carMemos'])
    ?.find((e) => e.id === id);

  if (!car) {
    return (
      <div>
        <p>No car found</p>
      </div>
    );
  }
  return (
    <div className='place-items-center'>
      <button className='btn' onClick={() => nav(-1)}>
        Go back
      </button>
      <p>Edit {car.id}</p>
      <p>License {car.licensePlate}</p>
      <p>
        Make: {car.make} Model: {car.model}
      </p>
      <p>{car.description}</p>
    </div>
  );
};

export default EditMemo;
