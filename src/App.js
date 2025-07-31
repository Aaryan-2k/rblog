import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import Category from './pages/Category'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/category/:categoryid' element={<Category/>}></Route>
    </Routes>

  );
}

export default App;
