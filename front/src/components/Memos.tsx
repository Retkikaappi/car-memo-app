import { useState } from 'react';
import { CarMemo } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import memoService from '../../services/memoService';

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  if (!images) {
    return (
      <div>
        <p>No images for memo</p>
      </div>
    );
  }

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
    <div className='h-60 w-96 flex flex-col items-center'>
      <p className='text-center'>
        Pictures: {index + 1}/{images.length}
      </p>
      <div className='flex justify-center items-center w-full h-full'>
        <button
          className={`h-10 btn ${images[index - 1] ? 'visible' : 'invisible'}`}
          onClick={btnPrev}
        >
          &lt;
        </button>
        <img
          className='h-52 w-64 object-contain'
          src={images[index]}
          onClick={() => window.open(images[index])}
        />
        <button
          className={`h-10 btn ${images[index + 1] ? 'visible' : 'invisible'}`}
          onClick={btnNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

const MemoCard = ({ memo }: { memo: CarMemo }) => {
  const nav = useNavigate();
  return (
    <div className='flex flex-col p-4 border-1 min-w-40 max-w-100 justify-around items-center'>
      <h3>{memo.licensePlate}</h3>
      <p>
        Make: {memo.make} Model: {memo.model}
      </p>
      <p>{memo.description}</p>
      {<ImageCarousel images={memo.pictures} />}
      <button className='btn mt-4' onClick={() => nav(`/editMemo/${memo.id}`)}>
        edit
      </button>
    </div>
  );
};

const Memos = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['carMemos'],
    queryFn: memoService.getMemos,
    refetchOnMount: false,
  });

  if (isLoading) {
    return (
      <div className='place-items-center p-4'>
        <p>Loading</p>
        <div className='spinner'></div>
      </div>
    );
  }
  if (!data) {
    return (
      <div className='place-items-center p-4'>
        <p>No memos</p>
      </div>
    );
  }
  return (
    <div className='bg-slate-800 p-12 flex gap-4 flex-wrap justify-center'>
      {data.map((e) => (
        <MemoCard key={e.id} memo={e} />
      ))}
    </div>
  );
};

export default Memos;
