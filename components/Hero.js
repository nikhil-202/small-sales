"use client"
import styles from './Hero.module.css';



const scrollToGrids = () => {
  const gridElement = document.getElementById('main-container');
  if (gridElement) {
    gridElement.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = ({}) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.decorativeLine} />
          
          <h1 className={styles.heading}>
            Sugar Swirls
            <div className={styles.nameWrapper}>
              <span className={styles.by}>By</span>
              <span className={styles.name}>Niranjana</span>
              <div className={styles.glow} />
            </div>
          </h1>

          <p className={styles.description}>
            Artisanal Cakes Crafted with Love & Imagination
          </p>

          <button className={styles.cta} onClick={scrollToGrids}>
            Explore Our Creations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;