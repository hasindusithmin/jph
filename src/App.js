import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Post from './pages/Posts';
import Comments from './pages/Comments';
import Todos from './pages/Todos';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Detail />} />
        <Route path="/post" element={<Post />} />
        <Route path="/comment" element={<Comments />} />
        <Route path="/todo" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
