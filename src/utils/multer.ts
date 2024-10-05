import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "zip") {
      return cb(null, "./public/games");
    }
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    if (file.fieldname === "zip") {
      return cb(null, `${Date.now()}-${file.originalname}`);
    }
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage }).fields([
  { name: "img", maxCount: 1 },
  { name: "zip", maxCount: 1 },
]);
