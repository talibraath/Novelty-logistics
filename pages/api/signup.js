import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';
import { hash } from 'bcryptjs';
import validateUser from '../../middleware/validateUser';

export default async function handler(req, res) {
  await dbConnect();

  // Apply the validateUser middleware
  await validateUser(req, res, async () => {
    if (req.method === 'POST') {
      const { name, email, password } = req.body;

      // Hash the password
      const hashedPassword = await hash(password, 10);

      try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(409).json({ message: 'User already exists' });
        }

        // Create and save the new user
        const user = await User.create({
          name,
          email,
          password: hashedPassword,
        });

        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
    } else {
      res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  });
}
