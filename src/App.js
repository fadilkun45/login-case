import './App.css';
import { Route,Routes,BrowserRouter,Navigate,useNavigate } from 'react-router-dom';
import Login from './Page/Login';
import Privatepage from './Page/Privatepage';
import decode from 'jwt-decode'

function PrivateRoute({children}){
  const token = JSON.parse(localStorage.getItem('users'))
  
  //  jika token tidak ada
  if(!token){
    return <Navigate to="/login" />
  }else{
    // decode token
    const decodedToken = decode(token);

    console.log(new Date(decodedToken.exp * 1000))

    // cek exp token 
    if(decodedToken.exp * 1000 > new Date().getTime()) {
      return children
    }
  }

}


function App() {
  return (
   <BrowserRouter>
  <Routes>
  <Route path="/" element={<Navigate replace to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path ="/dashboard" element={<PrivateRoute><Privatepage /></PrivateRoute>} />
  </Routes>
   
  </BrowserRouter> 
  );
}

export default App;
