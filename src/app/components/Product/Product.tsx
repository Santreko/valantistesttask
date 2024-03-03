import { ProductProps } from './Product.props';
import styles from './Product.module.css';

export const Product = ({ identificator, name, price, brand, ...props }: ProductProps): JSX.Element => {
	return (
		<li className={styles.product} {...props}>
			<p className={styles.id}>{identificator}</p>
			<p className={styles.name}>{name}</p>
			<p className={styles.price}>{price} Р</p>
			<p className={styles.brand}>{brand}</p>
		</li>
	);
};