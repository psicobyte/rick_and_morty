import axios from 'axios'
import { QueryData } from '../types'

const apiQuery = async (queryData: QueryData) => {
  const url = process.env.REACT_APP_API_REST_URL + queryData.key + '?page=' + queryData.page
  console.log(url)
  const result = apiRestQuery(url)

  return result
}

const apiRestQuery = async (url: string) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log('error en la api')
  }
}

export default apiQuery
