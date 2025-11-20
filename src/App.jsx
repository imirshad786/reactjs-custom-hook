import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import useFetch from './hooks/useFetch';


const App = () => {
  const [apiUrl, setApiUrl] = useState('https://api.escuelajs.co/api/v1/products');
  const { data, loading, error } = useFetch(apiUrl);


  return (
    <div style={styles.container}>

      <main style={styles.main}>
        {loading && (
          <div style={styles.spinnerContainer}>
      <p style={styles.loadingText}>Loading products...</p>
    </div>
        )}

        {error && !loading && (
           <div style={styles.errorContainer}>
      <h2 style={styles.errorTitle}>Oops! Something went wrong</h2>
      <p style={styles.errorMessage}>{error}</p>
    </div>
        )}

        {(!loading && !error && data) && (
          <>
            <div style={styles.productsGrid}>
              {data.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </>
        )}

        {(!loading && !error && data && data.length === 0) && (
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

   errorContainer: {
    position : 'absolute',
    top : '50%',
    left : '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center'
  },
  errorTitle: {
    fontSize: '1.8rem',
    color: '#fff',
    margin: '0 0 15px 0',
  },
  errorMessage: {
    fontSize: '1rem',
    color: '#fff',
    margin: '0 0 30px 0',
    lineHeight: '1.6',
  },
  retryButton: {
    color: '#667eea',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

   spinnerContainer: {
    position : 'absolute',
    top : '50%',
    left : '50%',
    transform: 'translate(-50%,-50%)',
  },
  loadingText: {
    marginTop: '20px',
    fontSize: '1.1rem',
    color: '#fff',
    fontWeight: '500',
  },
};

export default App;