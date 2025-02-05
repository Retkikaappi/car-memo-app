const getAll = async () => {
  const resp = await fetch('http://192.168.1.15:3001/api/carMemos');
  return resp.json();
};

const createNew = async (formdata) => {
  const resp = await fetch('http://192.168.1.15:3001/api/carMemos/mobile', {
    method: 'POST',
    body: formdata,
  });
  return resp.json();
};

const deleteOne = async (id) => {
  const resp = await fetch(
    `http://192.168.1.15:3001/api/carMemos/mobile/${id}`,
    {
      method: 'DELETE',
    }
  );
  return resp.json();
};
export default { getAll, createNew, deleteOne };
