
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ResetPass from './pages/Login/ResetPass';
import Purchase from './pages/Purchase/Purchase';
import Requiredauth from './pages/Login/Requiredauth';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import AllUser from './pages/Dashboard/AllUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/purchase/:id' element={
          <Requiredauth>
            <Purchase></Purchase>
          </Requiredauth>
        } ></Route>
        <Route path='/dashboard' element={
          <Requiredauth>
            <Dashboard></Dashboard>
          </Requiredauth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='users' element={<AllUser></AllUser>}></Route>
        </Route>
        <Route path='/signup' element={<Signup></Signup>} ></Route>
        <Route path='/resetpass' element={<ResetPass></ResetPass>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;