import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NewPost from './pages/NewPost';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
