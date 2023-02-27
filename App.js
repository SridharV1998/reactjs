import logo from './logo.svg';
import './App.css';
import Home from './Home';
import StockPage from './StockPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
           <div className="App">
           
           <Routes>
                 <Route exact path='' element={< Home />}></Route>
                 <Route exact path='/StockPage' element={< StockPage />}></Route>
                
          </Routes>
          </div>
       </Router>
  );
}

export default App;
