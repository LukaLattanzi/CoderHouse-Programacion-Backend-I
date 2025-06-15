import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now() + "-" + file.originalname;
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

export default upload;
