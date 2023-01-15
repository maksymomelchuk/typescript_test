import { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from './redux/store'
import { getData } from './redux/thunk'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ArticleDetails } from './components/ArticleDetails/ArticleDetails'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<ArticleDetails />} />
    </Routes>
  )
}

export default App
