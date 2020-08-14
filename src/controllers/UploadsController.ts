import multer from 'multer';
const crypto = require("crypto");


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./tmp/uploads");
  },
  filename: function (req,file, cb) {
    crypto.randomBytes(16, (err: Error, hash: Number) =>{
      if (err) cb(err, "Deu ruim");
      const filename = `${hash.toString('hex')}-${file.originalname}`
      cb(null, filename)
    })

  },  

},

);

const uploads = multer({ storage: storage });

export default uploads ;