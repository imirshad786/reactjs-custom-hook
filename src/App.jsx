import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import useFetch from './hooks/useFetch';


const App = () => {
  const [apiUrl, setApiUrl] = useState('https://api.escuelajs.co/api/v1/products');
  const { data, loading, error } = useFetch(apiUrl);

  const handleRetry = () => {
    setApiUrl('https://api.escuelajs.co/api/v1/products');
  };

  const handleRefresh = () => {
    setApiUrl(`https://api.escuelajs.co/api/v1/products`);
  };

  return (
    <div style={styles.container}>

      <main style={styles.main}>
        {loading && <LoadingSpinner />}

        {error && !loading && <ErrorMessage error={error} onRetry={handleRetry} />}

        {!loading && !error && data && (
          <>
            <div style={styles.productsGrid}>
              {data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}

        {!loading && !error && data && data.length === 0 && (
          <div style={styles.emptyState}>
            <h2>No products found</h2>
            <p>Try refreshing the page</p>
          </div>
        )}
      </main>

    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },

  main: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
    minHeight: 'calc(100vh - 300px)',
  },

  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px',
    animation: 'fadeIn 0.5s ease',
  },
  
  emptyState: {
    textAlign: 'center',
    padding: '80px 20px',
    color: '#666',
  },
};

export default App;