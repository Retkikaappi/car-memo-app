import { CarMemo } from '../src/types/types';

const baseUrl = 'http://localhost:3001/api/carMemos';

const getMemos = async (): Promise<CarMemo[]> => {
  const resp = await fetch(baseUrl);

  const json = await resp.json();
  console.log(json);
  return json;
};

const postMemo = async (formData: FormData) => {
  const resp = await fetch(baseUrl, {
    method: 'POST',
    body: formData,
  });
  return resp.json();
};

export default { getMemos, postMemo };
