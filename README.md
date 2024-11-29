# E-Commerce App with Server-Side Rendering

A modern e-commerce application built with React, TypeScript, and Express, featuring server-side rendering (SSR) for optimal performance and SEO.

> This project, including this documentation, was generated using Windsurf - the world's first agentic IDE. Windsurf leverages advanced AI capabilities to create, maintain, and document software projects efficiently.

## Features

- 🚀 Server-Side Rendering (SSR)
- ⚡ Code Splitting & Lazy Loading
- 🔒 JWT Authentication
- 📦 Product Listing with Mock API
- 🎨 Responsive Design
- 🔥 Hot Module Replacement in Development
- 📱 Mobile-Friendly UI

## Tech Stack

- **Frontend:**

  - React 18
  - TypeScript
  - CSS Modules
  - Webpack 5

- **Backend:**

  - Express
  - Node.js
  - JWT Authentication

- **Development:**
  - pnpm (Package Manager)
  - nodemon
  - ts-node
  - Webpack Dev Server

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- pnpm (v6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd e-commerce-app
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

1. Start the development server:

   ```bash
   pnpm dev
   ```

   This will start the server with hot reloading at http://localhost:3000

2. Build the client bundle:

   ```bash
   pnpm build
   ```

3. Watch mode for client bundle:
   ```bash
   pnpm build:watch
   ```

### Production

1. Build the production bundle:

   ```bash
   pnpm build
   ```

2. Start the production server:
   ```bash
   pnpm start
   ```

## Project Structure

```
e-commerce-app/
├── client/
│   ├── components/
│   │   ├── LoginForm.tsx
│   │   └── ProductList.tsx
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── index.tsx
├── server/
│   ├── routes/
│   │   └── auth.ts
│   ├── index.ts
│   └── server.ts
├── public/
│   └── (generated assets)
├── src/
│   └── types/
│       └── css.d.ts
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## Performance Optimizations

- **Code Splitting:** Separates vendor and application code
- **Lazy Loading:** Components load on demand
- **Compression:** Gzip compression for all static assets
- **Caching:** Aggressive caching for static assets
- **CSS Optimization:** CSS extraction and minification

## Authentication

The app uses JWT (JSON Web Token) for authentication. For development purposes, you can use these credentials:

- Username: admin
- Password: password

## API Integration

The app uses the FakeStore API for product data. In a production environment, you would replace this with your actual API endpoints.

## Development Notes

- The development server supports hot reloading
- TypeScript errors are shown in the console
- Webpack build errors are displayed in the browser
- CSS changes are immediately reflected

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

- React Team for the amazing framework
- Express.js Team for the robust server framework
- FakeStore API for the product data
