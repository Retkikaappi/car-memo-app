import express from 'express';

import cors from 'cors';
import carRouter from './routes/carRoute';

const app = express();
app.use(express.json());

app.use(cors());
app.get('/api/test', (_req, resp) => {
  resp.send('/api/test');
});

app.use('/api/carMemos', carRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
