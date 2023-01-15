import { useLocation } from 'react-router-dom'
import Highlighter from 'react-highlight-words'
import { useAppSelector } from '../../redux/store'
import { selectArticles, selectSearchValue } from '../../redux/selectors'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'
import {
  Card,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Box,
} from '@mui/material'
import { Grid } from '@mui/joy'
import { StyledLink } from './Articles.styled'

export const ArticlesList = () => {
  const data = useAppSelector(selectArticles)
  const location = useLocation()
  const searchValue = useAppSelector(selectSearchValue)
  console.log('searchValue', searchValue)
  const convertData = (data: string) => {
    const date = new Date(data)
    const dateString = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })
    return dateString
  }
  const filteredByTitle = data.filter((el) => {
    let result
    for (let word of searchValue) {
      result = el.title
        .toLowerCase()
        .split(' ')
        .slice(0, 7)
        .join(' ')
        .includes(word)
    }
    return result
  })
  console.log('filteredByTitle', filteredByTitle)
  const filteredByText = data.filter((el) => {
    let result
    for (let word of searchValue) {
      result = el.summary
        .toLowerCase()
        .split(' ')
        .slice(0, 20)
        .join(' ')
        .includes(word)
    }
    return result
  })
  const filteredData = [...filteredByTitle, ...filteredByText].filter(
    (el, i, arr) => {
      return i === arr.indexOf(el)
    }
  )
  const dataToShow = searchValue[0] === '' ? data : filteredData
  console.log('dataToShow', dataToShow)

  return (
    <Grid container gap={6} sx={{ flexGrow: 1, mt: 3 }}>
      {dataToShow?.map((el) => {
        const { imageUrl, title, publishedAt, summary, id } = el
        return (
          <Grid sx={{}} key={id}>
            <Card sx={{ width: '400px' }}>
              <CardMedia
                sx={{ height: 217 }}
                image={imageUrl}
                title="green iguana"
              />
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex' }}>
                  <CalendarTodayOutlinedIcon fontSize="small" />
                  <Typography
                    sx={{ ml: 1 }}
                    color="text.secondary"
                    variant="body2"
                    component="span"
                  >
                    {convertData(publishedAt)}
                  </Typography>
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  sx={{
                    height: '65px',
                    overflow: 'hidden',
                    mb: '20px',
                    mt: '24px',
                  }}
                >
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={searchValue}
                    autoEscape={true}
                    textToHighlight={title.split(' ').slice(0, 7).join(' ')}
                  />
                </Typography>
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ mb: '20px', height: '96px', overflow: 'hidden' }}
                >
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={searchValue}
                    autoEscape={true}
                    textToHighlight={
                      summary.split(' ').slice(0, 20).join(' ') + '...'
                    }
                  />
                </Typography>

                <CardActions sx={{ p: 0 }}>
                  <StyledLink to={`${id}`} state={{ from: location }}>
                    <Button
                      size="small"
                      sx={{
                        p: 0,
                        textTransform: 'none',
                        fontSize: '16px',
                        lineHeight: 1.5,
                        color: 'inherit',
                      }}
                    >
                      Read more
                      <ArrowRightAltOutlinedIcon
                        fontSize="small"
                        sx={{ ml: '6px' }}
                      />
                    </Button>
                  </StyledLink>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}
