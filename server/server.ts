import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import compression from 'compression';
import App from '../client/App';
import authRouter from './routes/auth';

const app = express();
const port = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Middleware
app.use(express.json());

// Serve static files with caching headers
app.use(
  express.static('public', {
    maxAge: '1d',
    setHeaders: (res, path) => {
      if (path.endsWith('.js') || path.endsWith('.css')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year
      }
    },
  })
);

// API routes
app.use('/api/auth', authRouter);

// SSR route
app.get('*', (req, res) => {
  const html = renderToString(React.createElement(App));

  // Get the client bundle filename dynamically
  const clientBundlePath = path.join(__dirname, '../public');
  const files = require('fs').readdirSync(clientBundlePath);
  const mainBundle = files.find(
    (file: string) => file.startsWith('main.') && file.endsWith('.js')
  );
  const vendorBundle = files.find(
    (file: string) => file.startsWith('vendors.') && file.endsWith('.js')
  );
  const styleBundle = files.find(
    (file: string) => file.startsWith('styles.') && file.endsWith('.css')
  );

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>E-Commerce App</title>
        <link rel="stylesheet" href="/${styleBundle}">
        <link rel="preload" href="/${vendorBundle}" as="script">
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/${vendorBundle}" defer></script>
        <script src="/${mainBundle}" defer></script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
