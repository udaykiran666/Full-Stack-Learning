import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {lazy, Suspense } from 'react';
const Dashboard = lazy(()=> import('../components/Dashboard'))
const Landing = lazy(()=> import('../components/Landing'))

function App() {
  //The useNavigate hook only works within the context of a BrowserRouter

  return (
    <div>
    <BrowserRouter>
      <NavigateButtons/>
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
    </BrowserRouter>
    </div>
  )
}

function NavigateButtons (){
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate('/');
      }}>Landing</button>

      <button onClick={()=>{
        navigate('/dashboard');
      }}>Dashboard</button>
    </div>
  )
}

export default App