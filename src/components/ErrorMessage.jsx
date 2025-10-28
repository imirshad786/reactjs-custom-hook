const ErrorMessage = ({ error, onRetry }) => {

  const styles = {
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
 
};

  return (
    <div style={styles.errorContainer}>
      <h2 style={styles.errorTitle}>Oops! Something went wrong</h2>
      <p style={styles.errorMessage}>{error}</p>
      <span style={styles.retryButton} onClick={onRetry}>
        Try Again
      </span>
    </div>
  );
};

export default ErrorMessage;