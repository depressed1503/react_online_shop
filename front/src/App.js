import './App.css';
import { Routes, Route } from 'react-router-dom'

// components
import IndexPage from './pages/IndexPage';
import NavBar from './components/NavBar/NavBar';
// pages
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage';
import CatalogPage from './pages/CatalogPage';
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<IndexPage></IndexPage>}></Route>
        <Route path='/registration' element={<RegistrationPage></RegistrationPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/catalog' element={<CatalogPage></CatalogPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
