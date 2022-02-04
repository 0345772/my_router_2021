import { Routes, Route } from 'react-router-dom';
import { AboutPage, BlogPage, HomePage, NotfoundPage } from './pages';
import { Layout } from './components';
export function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>      
      </Routes>
      
    </>
  )
} 
