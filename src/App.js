import {Route, Routes, BrowserRouter} from "react-router-dom";
import './App.css'
import LoginPage from './components/LoginPage';
import RegisterPage from "./components/RegisterPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Routes>
    <Route path='/' element={<Header />}/>
     <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
