import Image from 'next/image';
import styles from './CakeCard.module.css';

const CakeCard = ({ cake }) => {
  return (
    <div className={styles.cakeCard}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={cake.image}
            alt={cake.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.cakeImage}
            priority={false}
          />
        </div>
        <div className={styles.overlay}>
          <button className={styles.viewButton}>
            Discover More
          </button>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.category}>{cake.category}</div>
        <h3 className={styles.cakeName}>{cake.name}</h3>
        <div className={styles.decorativeLine} />
        <p className={styles.cakeDescription}>{cake.description}</p>
        <div className={styles.tags}>
          {cake.tags?.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeCard;