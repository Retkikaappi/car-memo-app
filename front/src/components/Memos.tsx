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
    <div className='border-1 border-blue-500'>
      <p className='text-center'>
        Pictures: {index + 1}/{images.length}
      </p>
      <div className='justify-center items-center flex flex-row min-w-8/10'>
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
    <div className='flex flex-col flex-1 p-4 border-1 min-w-40 justify-around items-center'>
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
    <div className='bg-slate-800 p-12 flex flex-wrap'>
      {data.map((e) => (
        <MemoCard key={e.id} memo={e} />
      ))}
    </div>
  );
};

export default Memos;
