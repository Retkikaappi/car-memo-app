import { z } from 'zod';

//stripped out required() fields to make it as easy to use as possible.
const newCarSchema = z.object({
  licensePlate: z.string(),
  make: z.string(),
  model: z.string(),
  description: z.string(),
  pictures: z.string().array(),
});

export default newCarSchema;
