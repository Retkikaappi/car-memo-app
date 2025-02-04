import { z } from 'zod';

const newCarSchema = z.object({
  licensePlate: z.string().min(1, 'Licenseplate is required'),
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  description: z.string(),
  pictures: z.string().array(),
});

export default newCarSchema;
