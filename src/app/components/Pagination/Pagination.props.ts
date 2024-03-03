import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	currentPage: number
	nextPageFn: () => void
	previousPageFn: () => void
}