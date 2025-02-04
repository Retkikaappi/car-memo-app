import multer from 'multer';

const storage = multer.diskStorage({
  destination: './data/pictures',
  filename: (_req, file, cb) => {
    const id = Date.now() + '-' + file.originalname;
    cb(null, id);
  },
});

const upload = multer({ storage });

export default upload;
