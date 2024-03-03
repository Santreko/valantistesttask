'use client'
import { useEffect, useState } from 'react';
import { FiltersList, Htag, Pagination, ProductsList } from './components';
import styles from './products.module.css'

export default function Products(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [currentFilter, setCurrentFilter] = useState<string>('none')

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const goToPreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    setCurrentFilter('none')
  }, [currentPage])

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Htag tag={'h1'}>Список товаров</Htag>
        <Htag className={styles.sortTitle} tag={'h2'}>Сортировка товаров</Htag>
        <FiltersList changeFilterFn={setCurrentFilter} currentFilter={currentFilter} />
        <ProductsList currentFilter={currentFilter} currentPage={currentPage} />
        <Pagination previousPageFn={goToPreviousPage} nextPageFn={goToNextPage} currentPage={currentPage} />
      </div>
    </main >
  );
}
