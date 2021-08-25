const multer = require('multer');

//Below we create a storage variable which will allow us to preserve name and extension
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, originalname);
    }
});

//Below is a shorter way to upload if we didn't care about keeping the correct name, but we will prefer to use the proper storage we built above
//const upload = multer({ dest: 'uploads/' });

//below is actually written multer({ storage: storage}) but we can simplify it
const upload = multer({ storage });


module.exports = {
    upload
};

