import Hero from '../../components/Hero';
import CakeGrid from '../../components/CakeGrid';
import styles from '../../styles/Home.module.css'; // Optional: For homepage specific styles
import Navbar from '../../components/Navbar';

export default function Home() {
  // Sample cake data (replace with your actual data)
  const cakeData = [
    {
      id: 1,
      name: 'Chocolate Fudge Cake',
      image: '/images/hero-cakes/pexels-ozrenildo-1291712.jpg', // Place your cake images in public/images/cakes/
      description: 'Rich and decadent chocolate cake.',
    },
    {
      id: 2,
      name: 'Vanilla Bean Cake',
      image: '/images/hero-cakes/pexels-pixabay-265801.jpg',
      description: 'Classic vanilla cake with a hint of bean.',
    },
    {
      id: 3,
      name: 'Strawberry Swirl Cake',
      image: '/images/hero-cakes/pexels-vojtech-okenka-127162-1055272.jpg',
      description: 'Delightful strawberry flavored cake.',
    },
    {
      id: 4,
      name: 'Chocolate Fudge Cake',
      image: '/images/hero-cakes/pexels-ozrenildo-1291712.jpg', // Place your cake images in public/images/cakes/
      description: 'Rich and decadent chocolate cake.',
    },
    {
      id: 5,
      name: 'Vanilla Bean Cake',
      image: '/images/hero-cakes/pexels-pixabay-265801.jpg',
      description: 'Classic vanilla cake with a hint of bean.',
    },
    {
      id: 6,
      name: 'Strawberry Swirl Cake',
      image: '/images/hero-cakes/pexels-vojtech-okenka-127162-1055272.jpg',
      description: 'Delightful strawberry flavored cake.',
    },
    {
      id: 7,
      name: 'Chocolate Fudge Cake',
      image: '/images/hero-cakes/pexels-ozrenildo-1291712.jpg', // Place your cake images in public/images/cakes/
      description: 'Rich and decadent chocolate cake.',
    },
    {
      id: 8,
      name: 'Vanilla Bean Cake',
      image: '/images/hero-cakes/pexels-pixabay-265801.jpg',
      description: 'Classic vanilla cake with a hint of bean.',
    },
    {
      id: 9,
      name: 'Strawberry Swirl Cake',
      image: '/images/hero-cakes/pexels-vojtech-okenka-127162-1055272.jpg',
      description: 'Delightful strawberry flavored cake.',
    },
    {
      id: 10,
      name: 'Chocolate Fudge Cake',
      image: '/images/hero-cakes/pexels-ozrenildo-1291712.jpg', // Place your cake images in public/images/cakes/
      description: 'Rich and decadent chocolate cake.',
    },
    {
      id: 11,
      name: 'Vanilla Bean Cake',
      image: '/images/hero-cakes/pexels-pixabay-265801.jpg',
      description: 'Classic vanilla cake with a hint of bean.',
    },
    {
      id: 12,
      name: 'Strawberry Swirl Cake',
      image: '/images/hero-cakes/pexels-vojtech-okenka-127162-1055272.jpg',
      description: 'Delightful strawberry flavored cake.',
    },
    
    // Add more cake objects here
  ];

  return (
    <div>
      <Navbar />
      <Hero/>
      <main id='main-container' className={styles.main}> {/* Optional: Style the main content area */}
        <CakeGrid cakes={cakeData} />
      </main>

    </div>
  );
}