import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FiltersProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
	currentFilter: string
	changeFilterFn: Function
}