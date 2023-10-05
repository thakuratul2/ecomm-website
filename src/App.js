import Header from './components/Header';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <h2>Hello World</h2>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
