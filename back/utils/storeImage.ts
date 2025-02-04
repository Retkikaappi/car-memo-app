import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: './data/pictures',
  filename: (_req, file, cb) => {
    const id = Date.now() + path.extname(file.originalname);
    cb(null, id);
  },
});

const upload = multer({ storage });

export default upload;
