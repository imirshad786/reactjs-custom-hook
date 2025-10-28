const ProductCard = ({ product }) => {

  const styles = {

  card: {
    border: '1px solid #e0e0e0',
    overflow: 'hidden',
    padding: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  imageContainer: {
    width: '100%',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
 
};

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img 
          src={product.images[0] || 'https://via.placeholder.com/200'} 
          alt={product.title}
          style={styles.image}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200?text=No+Image';
          }}
        />
        <p>{product.title}</p>
      </div>
    </div>
  );
};

export default ProductCard;