const multer = require('multer');
const postCntr = require('../controlleur/postController');
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'application/pdf' : 'pdf'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'Files');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const nameWithoutExtension = name.split('.')[0];
        const extension = MIME_TYPES[file.mimetype];
        const fileName = nameWithoutExtension + Date.now() + '.' + extension;
        callback(null, fileName );
        if(file.mimetype === 'application/pdf'){
            postCntr.setDocumentName(fileName);
        }
        else{
            postCntr.setImageName(fileName);

        }
    }
});

module.exports = multer({storage: storage}).array('file',2);
