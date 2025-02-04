import express, { Request, Response } from 'express';
import upload from '../../utils/storeImage';
import { CarMemo, NewCarMemo } from '../types';
import carMemoMock from '../../data/carMemos';
import carService from '../services/carService';

const router = express.Router();

router.get('/', (_req: Request, resp: Response<CarMemo[]>) => {
  resp.send(carMemoMock);
});

router.post(
  '/',
  upload.single('pictures'),
  (req: Request<unknown, unknown, NewCarMemo>, resp: Response) => {
    if (!req.file) {
      resp.status(400).json({ error: 'no attached image' });
      return;
    }
    if (!req.body) {
      resp.status(400).json({ error: 'body missing' });
      return;
    }
    const newCar = carService.addNew({
      ...req.body,
      pictures: [`http://localhost:3001/api/pictures/${req.file.filename}`],
    });

    resp.json(newCar);
  }
);

export default router;
