
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Register from './pages/Register'
import Login from './pages/Login';
import registerImage from './assets/registerImage.jpg'
import loginImage from './assets/loginImage.jpg'


function App() {
  

  return (
    <>
    <Router>
      <NavBar />
      <Routes>
      <Route
            path="/"
            element={
              <div
                className="text-white h-[100vh] flex items-center justify-center bg-cover"
                style={{ backgroundImage: `url(${registerImage})` }}
              >
                <Register />
              </div>
            }
          />
           <Route
            path="/login"
            element={
              <div
                className="text-white h-[100vh] flex items-center justify-center bg-cover"
                style={{ backgroundImage: `url(${loginImage})` }}
              >
                <Login />
              </div>
            }
          />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
