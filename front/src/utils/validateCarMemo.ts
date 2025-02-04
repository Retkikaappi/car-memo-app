import { z } from 'zod';
const MAX_FILE_SIZE = 1024 * 1024 * 5;
const IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

const newCarSchema = z.object({
  licensePlate: z.string().min(1, 'Licenseplate is required'),
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  description: z.string(),
  pictures: z
    .custom<File>()
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'max file size is 5MB',
    })
    .refine((file) => IMAGE_TYPES.includes(file.type), {
      message: 'invalid file type',
    }),
});

export default newCarSchema;
