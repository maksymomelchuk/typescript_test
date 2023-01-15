import { createSlice } from '@reduxjs/toolkit'
import { getData } from './thunk'

export interface IArticles {
  id: number
  title: string
  imageUrl: string
  summary: string
  publishedAt: string
  updatedAt: string
  featured: boolean
  events: []
  launches: []
  newsSite: string
  url: string
}

interface IInitialState {
  articles: IArticles[]
  isLoading: boolean
  error: any
  searchValue: any
}

const initialState: IInitialState = {
  articles: [],
  isLoading: false,
  error: null,
  searchValue: [''],
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    filterArticles: (state, action) => {
      state.searchValue = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false
        state.articles = action.payload
      })
      .addCase(getData.rejected, (state, action) => {
        state.error = action.payload
      })
  },
})

export const articlesReducer = articlesSlice.reducer
export const { filterArticles } = articlesSlice.actions
