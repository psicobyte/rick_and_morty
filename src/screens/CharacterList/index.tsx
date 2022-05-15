import React, { useState, useEffect } from 'react'
import apiQuery from '../../helpers/apiQuery'
import CharacterCard from '../../components/CharacterCard'
import { QueryData, Character } from '../../types'
import { useParams } from 'react-router-dom'
import Pagination from '../../components/Pagination'

const CharacterList = () => {
  const [characterList, setCharacterList] = useState<Character[]>([])
  const [maxPage, setMaxPage] = useState(1)

  const { page } = useParams()

  useEffect(() => {
    (async function () {
      const queryData: QueryData = { key: 'character', page: page || '1' }
      const data = await apiQuery(queryData)
      setMaxPage(
        () => {
          return data.info.pages
        }
      )

      setCharacterList(
        () => { return data.results }
      )
    })()
  }, [])

  return (
        <>aaa
            {characterList.map((character: Character) => (
                <CharacterCard
                key = {character.id}
                {...character}
                />
            ))}
            <Pagination
                current = {page ? parseInt(page) : 1}
                max = {maxPage || 1}
                baseUrl = {'/pag'}

            />
        </>
  )
}

export default CharacterList
