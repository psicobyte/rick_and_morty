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
        <div>
            <h1>{characterData.name}</h1>
            <img src={characterData.image} />
        </div>
        <div>
            <ul>
                <li><strong>species:</strong> <em>{characterData.species}</em></li>
                <li><strong>type:</strong> <em>{characterData.type}</em></li>
                <li><strong>status:</strong> <em>{characterData.status}</em></li>
                <li><strong>gender:</strong> <em>{characterData.gender}</em></li>
                <li><strong>origin:</strong> <em>{characterData.origin.name}</em></li>
                <li><strong>location:</strong> <em>{characterData.location.name}</em></li>
            </ul>
        </div>
        <div><a href={'/'}>Main Page</a></div>
    </div>
    )
  }
  return (<></>)
}

export default CharacterPage
