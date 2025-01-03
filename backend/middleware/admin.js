const adminOnly = (req, res, next) => {
    // Ensure the role is 'admin'
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    
    next();
  };
  
  module.exports = adminOnly;
  