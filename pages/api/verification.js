import multer from 'multer';
import dbConnect from '../../lib/dbConnect';
import Verification from '../../models/Verification';

// Configure Multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};

// Middleware to handle Multer file uploads
async function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      // Use Multer to handle file uploads
      await runMiddleware(req, res, upload.array('documents'));

      const { fullName, email, documentType, additionalNotes } = req.body;

      if (!fullName || !email || !documentType) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }

      // Store the data in the database
      const verificationData = {
        fullName,
        email,
        documentType,
        additionalNotes,
        documents: req.files.map((file) => ({
          name: file.originalname,
          path: file.path,
        })),
      };

      const verification = await Verification.create(verificationData);
      return res.status(201).json({ success: true, data: verification });

    } catch (error) {
      console.error('Error:', error.message);
      return res.status(500).json({ success: false, message: `Server Error: ${error.message}` });
    }
  } else {
    return res.status(405).json({ success: false, message: `Method ${req.method} not allowed` });
  }
}
