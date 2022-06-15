
import './App.css';
import Signup from './Pages/Signup'
import {Routes,Route} from "react-router-dom"
import Alert from './Pages/Alert';
import Login from './Pages/Login';
import { UserState } from './Context/Context';
import Home from './Pages/Home'
function App() {
  const {user} =UserState()
  return (
    <div>
      {!user ?
      <> 
      <Alert/>
      <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </>
    :<>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    
    </>
    }
    </div>
  
    )}

export default App;
