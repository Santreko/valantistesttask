import { FilterProps } from './Filter.props';
import styles from './filter.module.css';
import cn from 'classnames';

export const Filter = ({ children, isActive, ...props }: FilterProps): JSX.Element => {
	return (
		<li className={cn(styles.filter, {
			[styles.active]: isActive && isActive == true
		})} tabIndex={1} {...props} >
			{children}
		</li>
	);
};