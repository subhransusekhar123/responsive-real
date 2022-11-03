import Main from './Component/Main';
import Navbar from './Component/Navbar/Navbar';
import Search from './Component/Search/Search';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Liked from './Component/Liked/Liked';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/liked' element={<Liked/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
