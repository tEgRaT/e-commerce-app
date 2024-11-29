import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate user credentials (this should be done against a database in a real application)
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

export default router;
