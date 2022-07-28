import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Post from './components/Post/Post';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/posts" element={<Post />}>
          <Route path="/posts/:postId" element={<Post />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;