import { RootState } from './store'

export const selectArticles = (state: RootState) => state.articles.articles
export const selectSearchValue = (state: RootState) =>
  state.articles.searchValue
