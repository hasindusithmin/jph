import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Post from './pages/Posts';
import Comments from './pages/Comments';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Detail />} />
        <Route path="/post" element={<Post />} />
        <Route path="/comment" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
