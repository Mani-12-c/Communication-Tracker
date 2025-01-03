const jwt = require('jsonwebtoken');

const SECRET_KEY = "secret"; // Replace with a secure secret key

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from the header
  // console.log(token)

  if (!token) {
    return res.status(401).json({ error: 'Access denied, no token provided' });
  }

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified; // Add user info to request object
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
