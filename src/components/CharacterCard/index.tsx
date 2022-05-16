import React from 'react'
import { Character } from '../../types'
import styles from './style.module.css'

const CharacterCard = (props: Character) => {
  const characterUrl = '/character/' + props.id

  return (
        <>
            <div className={styles.card}><a href={ characterUrl }>{props.name}</a></div>
        </>
  )
}

export default CharacterCard
