import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Box, Typography, Container, Button } from '@mui/material'
import { getArticle } from '../../services/api'
import { IArticles } from '../../redux/slice'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { StyledBackButton } from './ArticleDetails.styled'

export const ArticleDetails = () => {
  const [article, setArticle] = useState<IArticles | null>(null)
  const params = useParams()
  const id: number = Number(params.id)
  const location = useLocation()
  const backLinkHref = location.state?.from ?? '/'
  useEffect(() => {
    ;(async () => {
      const data = await getArticle(id)
      setArticle(data)
    })()
  }, [id])

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${article?.imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '245px',
        }}
      ></Box>
      <Container
        sx={{
          position: 'absolute',
          top: '150px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#ffffff',
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
            border: '1px solid #EAEAEA',
            borderRadius: '5px',
            padding: '35px 75px 50px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" component="h1" sx={{ mb: '50px' }}>
            {article?.title}
          </Typography>
          <Typography>{article?.summary}</Typography>
        </Box>
        <Box sx={{ p: '35px 75px 45px' }}>
          <StyledBackButton to={backLinkHref}>
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
              <ArrowBackIcon fontSize="small" sx={{ mr: '6px' }} />
              Back to homepage
            </Button>
          </StyledBackButton>
        </Box>
      </Container>
    </>
  )
}
