import React from 'react'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import LandingPage from './pages/Landing'
import InterviewPrep from './pages/Interviewprep/InterviewPrep'
import Landing from './pages/Landing'
import Dashboard from './pages/Home/Dashboard'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/interview-prep/:sessionId' element={<InterviewPrep/>}/>
        </Routes>
      </Router>
      <Toaster 
      toastOptions={{
        className:"",
        style:{
          fontSize:"13px",
        },
      }}/>
    </div>
  )
}

export default App