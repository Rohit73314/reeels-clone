import React, { useContext } from 'react'
import { Navigate, Outlet }  from 'react-router';
import { Routes,Route } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
// function PrivateRoute({ component: Component, ...rest }) {
//   const { user } = useContext(AuthContext)
//   return (
//     <Routes>
//       <Route {...rest} render={props => {
//         return user ? <Component {...props} /> : <Navigate to="/login"/>;
//       }} />

//     </Routes>

//   )
// }
 function PrivateRoute() {
  const {user} =useContext(AuthContext)
return  user ? <Outlet/> : <Navigate to="/login"/>;

}

 export default PrivateRoute