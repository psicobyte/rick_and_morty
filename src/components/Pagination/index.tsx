import React from 'react'
import { PaginationData } from '../../types'
import styles from './style.module.css'

const Pagination = (props: PaginationData) => {
  const prev = props.current - 1
  const next = props.current + 1

  return (
        <div className={styles.pagesBar}>
            <span><a href={ (prev > 0) ? props.baseUrl + prev : '' }>&lt;&lt;</a></span>
            <span>{props.current}</span>
            <span><a href={ (next < props.max) ? props.baseUrl + next : '' } >&gt;&gt;</a></span>
        </div>
  )
}

export default Pagination
