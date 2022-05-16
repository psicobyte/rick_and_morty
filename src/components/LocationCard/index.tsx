import React from 'react'
import { Location } from '../../types'

const LocationCard = (props: Location) => {
  const locationUrl = '/location/' + props.id
  return (
        <>
            <p><a href={ locationUrl }>{props.name}</a></p>
        </>
  )
}

export default LocationCard
