import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import QuestionsPage from './pages/questionsPage';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/quiz"
            element={<QuestionsPage/>}
          />
      </Routes>
    </div>
  );
}

export default App;
