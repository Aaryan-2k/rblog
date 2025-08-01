import './App.css';
import { Routes,Route,Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Category from './pages/Category'
import Tags from './pages/Tags'
import BlogView from './pages/BlogView'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='blogs'/>}/>
      <Route path='/blogs' element={<Home/>}></Route>
      <Route path='/blogs/category/:categoryid' element={<Category/>}></Route>
      <Route path='/blogs/tag/:tagid' element={<Tags/>}></Route>
      <Route path='/blogs/blog_view/:blogid' element={<BlogView/>}></Route>

    </Routes>

  );
}

export default App;
