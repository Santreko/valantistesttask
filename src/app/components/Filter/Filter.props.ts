import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface FilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	children: ReactNode
	isActive?: boolean
}