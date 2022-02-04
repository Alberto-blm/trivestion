import logo from './logo.svg';
import './App.css';
import { ButtonPlay } from './styledComponents/buttonPlay';
import { Routes, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
      </Routes>
    </div>
  );
}

export default App;
