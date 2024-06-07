import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import Success from './pages/Success';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <main>
        <Routes>
          <Route path='/' element={<Home />}exact />
          <Route path='/success' element={<Success />}/>
        </Routes>
      </main> 
    </BrowserRouter>
  )
}


export default App;