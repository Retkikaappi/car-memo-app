const NewMemo = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className='flex flex-col p-10 items-center' onSubmit={handleSubmit}>
        <label>License plate</label>
        <input className='txt' />
        <label>Make</label>
        <input className='txt' />
        <label>Model</label>
        <input className='txt' />

        <label>Description</label>
        <textarea className='txt w-80' />

        <input
          className='p-4 m-4 bg-neutral-500'
          type='file'
          accept='image/*'
          multiple
        />

        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default NewMemo;
