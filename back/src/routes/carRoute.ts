import express, { Request, Response } from 'express';
import upload from '../../utils/storeImage';
import { CarMemo } from '../types';
import carMemoMock from '../../data/carMemos';

const router = express.Router();

router.get('/', (_req: Request, resp: Response<CarMemo[]>) => {
  resp.send(carMemoMock);
});

router.post('/', upload.single('pictures'), (req: Request, resp: Response) => {
  if (!req.file) {
    resp.status(400).json({ error: 'no attached image' });
    return;
  }
  //need to add id and save
  resp.json({
    FormData: req.body as Response,
    imageUrl: `http://localhost:3001/data/pictures/${req.file.filename}`,
  });
});

export default router;
