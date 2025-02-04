import memoService from '../../services/memoService';
import newCarSchema from '../utils/validateCarMemo';

const NewMemo = () => {
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    //use useQuery

    try {
      const formData = new FormData(e.currentTarget);
      const parsedCar = newCarSchema.parse(Object.fromEntries(formData));

      const validCar = new FormData();
      Object.entries(parsedCar).forEach(([key, value]) =>
        validCar.append(key, value)
      );

      const resp = await memoService.postMemo(validCar);
      console.log(resp);
    } catch (e) {
      console.log('error', e);
    }
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
          name='pictures'
        />

        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default NewMemo;
