const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Look for the token in the request headers
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No Token Provided!' });
  }

  try {
    // Verify the token using your secret key
    const verified = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    req.user = verified;
    next(); // Pass control to the next function
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token!' });
  }
};