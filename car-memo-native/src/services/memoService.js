const getAll = async () => {
  const resp = await fetch('http://192.168.1.15:3001/api/carMemos');
  return resp.json();
};

export default { getAll };
