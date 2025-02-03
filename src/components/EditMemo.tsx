import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CarContext } from '../context/carContext';

const EditMemo = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const carMemos = useContext(CarContext);
  const car = carMemos.find((e) => e.id === id);

  if (!car) {
    return (
      <div>
        <p>No car found</p>
      </div>
    );
  }
  return (
    <div>
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
