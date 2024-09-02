import User from '../models/User'; // Correct path for importing the User model
// Ensure there is only one import statement for User

const validateUser = async (req, res, next) => {
  if (req.method !== 'POST') {
    return next(); // Skip validation if it's not a POST request
  }

  const { name, email, password } = req.body;

  try {
    // Create a new User instance to validate the data
    const user = new User({ name, email, password });

    // Trigger Mongoose validation
    await user.validate();

    // If validation passes, proceed to the next middleware/controller
    next();
  } catch (error) {
    // If validation fails, return a 400 Bad Request response with the error message
    res.status(400).json({ success: false, error: error.message });
  }
};

export default validateUser;
