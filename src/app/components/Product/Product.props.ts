import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	name: string
	brand?: string
	price: number
	identificator: string
}