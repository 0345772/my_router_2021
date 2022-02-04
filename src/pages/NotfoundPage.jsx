import { Link } from 'react-router-dom';

const NotfoundPage = () => {
  return (
    <div>
      <h1>Notfound Page</h1>
      <span style={{ color: "brown" }}>This page doesn't exist. Go <Link style={{ color: "blue", paddingLeft: "1px", fontStyle:"italic"}} to="/">Home</Link></span>
    </div>
  );
};

export { NotfoundPage };