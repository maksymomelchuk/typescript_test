import axios from 'axios'

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net'

export const getDataAPI = async () => {
  const { data } = await axios.get('/v3/articles/?_limit=100')
  return data
}

export const getArticle = async (id: number) => {
  const { data } = await axios.get(`/v3/articles/${id}`)
  return data
}
