
import { Route, Routes } from 'react-router-dom';
import { Navbar, Home, CreatePost, PostDetail } from './';

function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/post/:postId" element={<PostDetail />} />

      </Routes>

    </div >
  );
}

export default App;

