'use client'
import { FiltersProps } from './FiltersList.props';
import styles from './FiltersList.module.css';
import { Filter } from '../Filter/Filter'

export const FiltersList = ({ currentFilter, changeFilterFn, ...props }: FiltersProps): JSX.Element => {
	return (
		<ul className={styles.filterList} {...props}>
			<Filter onClick={() => changeFilterFn('name')} isActive={currentFilter == 'name' ? true : false}>По названию</Filter>
			<Filter onClick={() => changeFilterFn('price')} isActive={currentFilter == 'price' ? true : false}>По цене</Filter>
			<Filter onClick={() => changeFilterFn('brand')} isActive={currentFilter == 'brand' ? true : false}>По бренду</Filter>
		</ul >
	);
};