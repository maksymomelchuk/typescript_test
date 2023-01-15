import { AppBar } from '../components/AppBar/AppBar'
import { ArticlesList } from '../components/Articles/ArticlesList'
import { StyledContainer } from './HomePage.styled'

export const HomePage = () => {
  return (
    <StyledContainer>
      <AppBar />
      <ArticlesList />
    </StyledContainer>
  )
}
