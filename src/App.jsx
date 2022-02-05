import { Routes, Route } from 'react-router-dom';
import { AboutPage, BlogPage, HomePage, NotfoundPage, SinglePage, CreatePost, EditPost } from './pages';
import { Layout } from './components';

export function App() {

  
  return (
    <div className="container">
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="posts/new" element={<CreatePost/>} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>       
      </Routes>
      
    </div>
  )
} 
