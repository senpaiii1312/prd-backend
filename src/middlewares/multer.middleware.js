import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./public/images`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now(0)}-${file.originalname}`);
  },
});

export const uplpoad = multer({
  storage,
  limits: {
    fileSize: 1 * 1000 * 1000,
  },
});
