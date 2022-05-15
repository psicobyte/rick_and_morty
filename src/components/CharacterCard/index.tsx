import React from 'react'
import { Character } from '../../types'

const CharacterCard = (props: Character) => {
  const characterUrl = '/character/' + props.id

  return (
        <>
            <p><a href={ characterUrl }>{props.name}</a></p>
        </>
  )
}

export default CharacterCard
