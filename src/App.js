import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Post from './pages/Posts';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Detail />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
