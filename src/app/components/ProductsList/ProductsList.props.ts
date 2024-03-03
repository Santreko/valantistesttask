import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	currentPage: number
	currentFilter: string
}