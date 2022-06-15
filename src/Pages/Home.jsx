import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Config/Firebase'
import { UserState } from '../Context/Context'
import {useNavigate} from 'react-router-dom'
function Home() {
    const navigate=useNavigate()
    const {setAlert}=UserState()
    const logout=()=>{
        signOut(auth)
        setAlert({
            open:true,
            message:'Logged Out!',
            severity:'success'
        })
        navigate('/')
    }
  return (
    <div>Home

        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home