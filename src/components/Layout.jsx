import { NavLink, Outlet } from 'react-router-dom';
import { CustomLink} from './CustomLink';


export const Layout = () => {
  return (
    <> 
    <header className="box-3">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/blog">Blog</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      </header>
      <div>
        <h3 className="box-3">Get started with React-Router 6</h3>
      </div>
      <main className="box-1"><Outlet/></main>
      <footer className="box-2">2022</footer>
    </>
  )
}