import { giftProducts } from '../data';
import styles from './products.module.css';
export default function Products() {
  return (
    <main>
      <h1>Our Collection</h1>
      <div className={styles.catalogGrid}>
        {giftProducts.map(gift => (
          <div key={gift.id} className={styles.catalogCard}>
            {gift.BadgeText && <span className={styles.badge}>{gift.BadgeText}</span>}
            <img src={gift.image} alt={gift.name} width={350} height={300} />
            <h3>{gift.name}</h3>
            <p>{gift.description}</p>
            <p>{gift.currency} {gift.price.toLocaleString()}</p>
            <button className={styles.buyButton}>Buy Now</button>
          </div>
        ))}
      </div>
    </main>
  );
}