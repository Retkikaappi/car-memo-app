import { NewCarMemo } from '../types/types';

const NewMemo = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      licensePlate: { value: string };
      make: { value: string };
      model: { value: string };
      description: { value: string };
      pictures: { value: File[] };
    };
    const newCar: NewCarMemo = {
      licensePlate: target.licensePlate.value,
      make: target.make.value,
      model: target.model.value,
      description: target.description.value,
      pictures: target.pictures.value,
    };
  };

  return (
    <div>
      <form className='flex flex-col p-12 items-center' onSubmit={handleSubmit}>
        <label>License plate</label>
        <input className='txt' name='licensePlate' />
        <label>Make</label>
        <input className='txt' name='make' />
        <label>Model</label>
        <input className='txt' name='model' />

        <label>Description</label>
        <textarea className='txt w-80' name='description' />

        <input
          className='p-4 m-4 bg-neutral-500'
          type='file'
          accept='image/*'
          multiple
          name='pictures'
        />

        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default NewMemo;
