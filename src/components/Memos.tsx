import { useContext, useState } from 'react';
import CarMemo from '../types/types';
import { useNavigate } from 'react-router-dom';
import { CarContext } from '../context/carContext';

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  const btnNext = () => {
    if (images[index + 1]) {
      setIndex(index + 1);
    }
  };
  const btnPrev = () => {
    if (images[index - 1]) {
      setIndex(index - 1);
    }
  };
  return (
    <div className='border-1 border-blue-500'>
      <p className='text-center'>
        Pictures: {index + 1}/{images.length}
      </p>
      <div className='flex flex-row justify-center items-center min-w-1/2 max-w-1/1'>
        <button className='h-30 btn' onClick={btnPrev}>
          &lt;
        </button>
        <img
          className='h-2/3 max-w-2/3'
          src={images[index]}
          onClick={() => window.open(images[index])}
        />
        <button className='h-30 btn' onClick={btnNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

const MemoCard = ({ memo }: { memo: CarMemo }) => {
  const nav = useNavigate();
  return (
    <div className='flex flex-col flex-1 p-4 min-w-1/4 max-w-1/4 border-1 items-center'>
      <h3>{memo.licensePlate}</h3>
      <p>
        Make: {memo.make} Model: {memo.model}
      </p>
      <p>{memo.description}</p>
      {<ImageCarousel images={memo.pictures} />}
      <button className='btn' onClick={() => nav(`/editMemo/${memo.id}`)}>
        edit
      </button>
    </div>
  );
};

const Memos = () => {
  const carMemos = useContext(CarContext);
  return (
    <div className='bg-slate-800 p-10 flex flex-wrap'>
      {carMemos.map((e) => (
        <MemoCard key={e.id} memo={e} />
      ))}
    </div>
  );
};

export default Memos;
