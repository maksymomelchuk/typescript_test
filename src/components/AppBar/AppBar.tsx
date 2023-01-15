import { Typography, Box, InputAdornment } from '@mui/material'
import { useAppDispatch } from '../../redux/store'
import { filterArticles } from '../../redux/slice'
import SearchIcon from '@mui/icons-material/Search'
import { StyledInput } from './AppBar.styled'

export const AppBar: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = event.target.value
    if (value === '') {
      dispatch(filterArticles(['']))
    } else {
      const arr: string[] = value.trim().split(' ')
      dispatch(filterArticles(arr))
    }
  }

  return (
    <Box sx={{ p: '50px 0px 40px' }}>
      <Typography variant="subtitle2">Filter by keywords</Typography>
      <StyledInput
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  )
}
