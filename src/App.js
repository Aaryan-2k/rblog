import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination';
function App() {
  return (
    <div>
    <Header></Header>
  <div className='container'>
    <Blogs/>
  </div>
    <Pagination></Pagination>
    </div>
  );
}

export default App;
