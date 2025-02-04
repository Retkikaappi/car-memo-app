import { useMutation, useQueryClient } from '@tanstack/react-query';
import memoService from '../../services/memoService';
import newCarSchema from '../utils/validateCarMemo';
import { useNavigate } from 'react-router-dom';

const NewMemo = () => {
  const queryClient = useQueryClient();
  const nav = useNavigate();
  const mutation = useMutation({
    mutationKey: ['carMemos'],
    mutationFn: (memo: FormData) => memoService.postMemo(memo),
    onSuccess: () => queryClient.refetchQueries({ queryKey: ['carMemos'] }),
    onError: (err) => console.log('mutation error', err),
  });
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const parsedCar = newCarSchema.parse(Object.fromEntries(formData));

      const validCar = new FormData();
      Object.entries(parsedCar).forEach(([key, value]) =>
        validCar.append(key, value)
      );

      mutation.mutate(validCar);
      nav('/');
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <div>
      <form className='flex flex-col p-12 items-center' onSubmit={handleSubmit}>
        <label>License plate</label>
        <input className='txt' name='licensePlate' required />
        <label>Make</label>
        <input className='txt' name='make' required />
        <label>Model</label>
        <input className='txt' name='model' required />

        <label>Description</label>
        <textarea className='txt w-80' name='description' />

        <input
          className='p-4 m-4 bg-neutral-500'
          type='file'
          accept='image/*'
          name='pictures'
          required
        />

        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default NewMemo;
