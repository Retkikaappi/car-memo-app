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
      pictures: [`http://192.168.1.15:3001/api/pictures/${req.file.filename}`],
    });

    resp.json(newCar);
  }
);

router.post(
  '/mobile',
  upload.array('pictures', 10),
  (req: Request<unknown, unknown, NewCarMemo>, resp: Response) => {
    if (!req.files || (Array.isArray(req.files) && req.files.length === 0)) {
      resp.status(400).json({ error: 'No images provided' });
    }
    const paths = (req.files as Express.Multer.File[]).map(
      (file) => `http://192.168.1.15:3001/api/pictures/${file.filename}`
    );

    const newCar = carService.addNew({
      ...req.body,
      pictures: paths,
    });

    resp.json(newCar);
  }
);

router.delete('/mobile/:id', (req, resp) => {
  if (!req.params) {
    resp.status(400).json({ error: 'no params' });
  }

  const removed = carService.removeOne(req.params);

  resp.json(removed);
});

export default router;
