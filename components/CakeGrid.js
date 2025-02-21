import CakeCard from './CakeCard';
import styles from './CakeGrid.module.css'; // Optional: For CakeGrid styling

const CakeGrid = ({ cakes }) => {
  return (
    <div className={styles.cakeGrid}> {/* Optional: Style the grid container */}
      {cakes.map((cake) => (
        <CakeCard key={cake.id} cake={cake} />
      ))}
    </div>
  );
};

export default CakeGrid;