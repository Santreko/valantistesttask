import { PaginationProps } from './Pagination.props';
import styles from './Pagination.module.css';
import cn from 'classnames'

export const Pagination = ({ currentPage, nextPageFn, previousPageFn, ...props }: PaginationProps): JSX.Element => {
	return (
		<ul className={styles.pagination} {...props}>
			<li>
				<button onClick={previousPageFn} className={cn(styles.paginationButton, styles.previousPageButton)}>
					<svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="black" />
					</svg>
				</button>
			</li>
			<li>
				<div className={styles.currentPage}>{currentPage}</div>
			</li>
			<li>
				<button onClick={nextPageFn} className={cn(styles.paginationButton, styles.nextPageButton)}>
					<svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="black" />
					</svg>
				</button>
			</li>
		</ul>
	);
};