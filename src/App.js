import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter as BrowserRouter,Router, Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import { AuthProvider } from './Context/AuthContext';
import Feed from './Components/feed';
import PrivateRoute from './Components/PrivateRoute';
import ForgetPassword from './Components/ForgetPassword';
import Profile from './Components/Profile';
import Ioa from './Components/Ioa';

function App() {
  return (
    <BrowserRouter>
      {/* <Ioa/> */}
    <AuthProvider>
      <Routes>
      <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Feed />} />
        </Route>
        <Route path="/profile/:id" element={<PrivateRoute />}>
          <Route  path="/profile/:id" element={<Profile />} />
        </Route>
        
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/forgetpassword" Component={ForgetPassword}/>
        
      </Routes>
     </AuthProvider>
     
    </BrowserRouter>

  );
}

export default App;
