const LoadingSpinner = () => {

 const styles = {
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


  return (
    <div style={styles.spinnerContainer}>
      <p style={styles.loadingText}>Loading products...</p>
    </div>
  );
};

export default LoadingSpinner;