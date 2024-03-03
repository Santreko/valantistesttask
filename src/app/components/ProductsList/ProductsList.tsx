'use client'
import { ProductsListProps } from './ProductsList.props';
import styles from './ProductsList.module.css';
import { Product } from '../Product/Product';
import md5 from 'md5';
import date from 'date-and-time'
import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl: string = `http://api.valantis.store:40000/`
let currentDate: any = new Date()
currentDate = date.format(currentDate, 'YYYYMMDD')
let md5Password = md5(`Valantis_${currentDate}`)

export const ProductsList = ({ currentPage, currentFilter, ...props }: ProductsListProps): JSX.Element => {
	const [productsData, setProductsData] = useState<object[]>([]);

	const getIdData = async (offset: number, limit: number) => {
		try {
			const response = await axios({
				method: 'post',
				url: apiUrl,
				data: {
					action: 'get_ids',
					params: { 'offset': offset, 'limit': limit }
				},
				headers: { 'X-Auth': md5Password }
			})
			let idDataWithoutDublicates: string[] = []
			await response.data.result.map((id: string) => {
				idDataWithoutDublicates.includes(id) ? idDataWithoutDublicates : idDataWithoutDublicates.push(id)
			})
			return idDataWithoutDublicates
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message)
			}
		}
	}

	const getProducts = async (offset: number, limit: number) => {
		let success = false
		while (!success) {
			try {
				const idData = await getIdData(offset, limit)
				const response = await axios({
					method: 'post',
					url: apiUrl,
					data: {
						action: 'get_items',
						params: { 'ids': idData }
					},
					headers: { 'X-Auth': md5Password }
				})
				success = true
				const responseWithoutDublicates: object[] = []
				while (responseWithoutDublicates.length !== limit) {
					let idBase: string[] = []
					response.data.result.map((product: object) => {
						if (!idBase.includes(product.id)) {
							idBase.push(product.id)
							responseWithoutDublicates.push(product)
						}
					})
				}
				setProductsData(responseWithoutDublicates)
			} catch (error) {
				if (error instanceof Error) {
					console.log(`Произошла ошибка при отправке запроса ${error.message}`)

				}
			}
		}
	}

	useEffect(() => {
		getProducts((currentPage - 1) * 50, 50)
	}, [currentPage])

	const sortByName = (firstProduct: object, secondProduct: object) => {
		if (firstProduct.product.toLowerCase() < secondProduct.product.toLowerCase()) {
			return -1;
		}
		if (firstProduct.product.toLowerCase() > secondProduct.product.toLowerCase()) {
			return 1;
		}
		return 0;
	}

	const sortByPrice = (firstProduct: object, secondProduct: object) => {
		return firstProduct.price - secondProduct.price
	}

	const sortByBrand = (firstProduct: object, secondProduct: object) => {
		if (firstProduct.brand == null && secondProduct.brand !== null) {
			return 1
		} else if (firstProduct.brand !== null && secondProduct.brand == null) {
			return -1
		} else if (firstProduct.brand == null && secondProduct.brand == null) {
			return 0
		} else if (firstProduct.brand.toLowerCase() < secondProduct.brand.toLowerCase()) {
			return -1
		} else if (firstProduct.brand.toLowerCase() > secondProduct.brand.toLowerCase()) {
			return 1
		}
	}

	useEffect(() => {
		switch (currentFilter) {
			case 'price':
				const producstDataByPrice = productsData.slice()
				producstDataByPrice.sort(sortByPrice)
				setProductsData(producstDataByPrice)
				break
			case 'name':
				const producstDataByName = productsData.slice()
				producstDataByName.sort(sortByName)
				setProductsData(producstDataByName)
				break
			case 'brand':
				const producstDataByBrand = productsData.slice()
				console.log(producstDataByBrand)
				producstDataByBrand.sort(sortByBrand)
				setProductsData(producstDataByBrand)
				break
			default:
				break
		}
	}, [currentFilter])

	return (
		<ul className={styles.productsList} {...props}>
			<li className={styles.productsListHeader}>
				<p className={styles.idHeader}>Id товара</p>
				<p className={styles.nameHeader}>Название товара</p>
				<p className={styles.priceHeader}>Цена товара</p>
				<p className={styles.brandHeader}>Бренд</p>
			</li>
			{productsData && productsData.map(product => (<Product key={product.id} identificator={product.id} name={product.product} brand={product.brand ? product.brand : 'Не указан'} price={product.price} />))}
		</ul>
	);
};