
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ResetPass from './pages/Login/ResetPass';
import Purchase from './pages/Purchase';
import Requiredauth from './pages/Login/Requiredauth';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/purchase' element={
          <Requiredauth>
            <Purchase></Purchase>
          </Requiredauth>
        } ></Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
        <Route path='/resetpass' element={<ResetPass></ResetPass>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
