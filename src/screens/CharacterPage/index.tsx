import React, { useEffect, useState } from 'react'
import { Character, QueryData } from '../../types'
import { useParams } from 'react-router-dom'
import apiQuery from '../../helpers/apiQuery'

const CharacterPage = () => {
  const { id } = useParams()

  const [characterData, setCharacterData] = useState<Character>()

  useEffect(() => {
    (async function () {
      const query = 'character/' + id
      console.log(query)
      const queryData: QueryData = { key: query, page: '1' }
      const data = await apiQuery(queryData)

      setCharacterData(
        () => { return data }
      )
    })()
  }, [])

  if (characterData) {
    return (
      <div>
        <h1>{characterData.name}</h1>
        <img src={characterData.image} />
        <div><a href={'/'}>Main Page</a></div>
      </div>
    )
  }
  return (<></>)
}

export default CharacterPage
