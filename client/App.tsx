import React, { useState, Suspense, lazy } from 'react';
import LoginForm from './components/LoginForm';
import './styles/global.css';

// Lazy load ProductList
const ProductList = lazy(() => import('./components/ProductList'));

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token: string) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div className="app">
      <header>
        <h1>E-Commerce Store</h1>
        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </header>

      <main>
        {isAuthenticated ? (
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductList />
          </Suspense>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </main>
    </div>
  );
};

export default App;
