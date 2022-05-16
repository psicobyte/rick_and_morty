import React, { useEffect, useState } from 'react'
import { Location, QueryData } from '../../types'
import { useParams } from 'react-router-dom'
import apiQuery from '../../helpers/apiQuery'

const LocationPage = () => {
  const { id } = useParams()

  const [locationData, setlocationData] = useState<Location>()

  useEffect(() => {
    (async function () {
      const query = 'location/' + id
      console.log(query)
      const queryData: QueryData = { key: query, page: '1' }
      const data = await apiQuery(queryData)

      setlocationData(
        () => { return data }
      )
    })()
  }, [])

  if (locationData) {
    return (
      <div>
        <div>
            <h1>{locationData.name}</h1>
            <ul>
                <li><strong>type:</strong> <em>{locationData.type}</em></li>
                <li><strong>dimension:</strong> <em>{locationData.dimension}</em></li>
            </ul>
        </div>
        <div><a href={'/locations/'}>Locations</a></div>
        <div><a href={'/'}>Main Page</a></div>
    </div>
    )
  }
  return (<></>)
}

export default LocationPage
