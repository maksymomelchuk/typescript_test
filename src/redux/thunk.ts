import { createAsyncThunk } from '@reduxjs/toolkit'
import { getDataAPI } from '../services/api'

// Fetch data Thunk
export const getData = createAsyncThunk(
  'articles/getData',
  async (_, thunkAPI) => {
    try {
      const data = await getDataAPI()
      return data
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message)
    }
  }
)
