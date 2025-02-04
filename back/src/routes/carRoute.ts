import express, { Request, Response } from 'express';
import { CarMemo } from '../types';
import carMemoMock from '../../data/carMemos';

const router = express.Router();

router.get('/', (_req: Request, resp: Response<CarMemo[]>) => {
  resp.send(carMemoMock);
});

export default router;
