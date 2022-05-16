import React, { useState, useEffect } from 'react'
import apiQuery from '../../helpers/apiQuery'
import { QueryData, Location } from '../../types'
import LocationCard from '../../components/LocationCard'
import { useParams } from 'react-router-dom'
import Pagination from '../../components/Pagination'
import styles from './style.module.css'

const LocationList = () => {
  const [locationList, setLocationList] = useState<Location[]>([])
  const [maxPage, setMaxPage] = useState(1)

  const { page } = useParams()

  useEffect(() => {
    (async function () {
      const queryData: QueryData = { key: 'location' }
      const data = await apiQuery(queryData)
      setMaxPage(
        () => {
          return data.info.pages
        }
      )

      setLocationList(
        () => { return data.results }
      )
    })()
  }, [])

  return (
        <div className={styles.body}>
            <h1 className={styles.header}>Location list</h1>
            <div className={styles.list}>
            {locationList.map((location: Location) => (
                <LocationCard key={location.id}
                              {...location}
                />
            ))}
            </div>
            <Pagination
                current = {page ? parseInt(page) : 1}
                max = {maxPage || 1}
                baseUrl = {'/locations/pag'}

            />
        </div>
  )
}

export default LocationList
