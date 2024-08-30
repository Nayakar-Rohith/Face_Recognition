import './App.css';
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import ManageUser from './components/ManageUser'
import NotFound from './components/NotFound';
import AddUser from './components/AddUser';
import Signup from './components/Signup';
import Landing from './components/Landing';
import NewUser from './components/NewUser';
function App() {
  return (
    <React.Fragment >
      <Navigation/>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/landing' element={<Landing/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        {/* <Route exact path='/login' element={<Login/>}/> */}
        <Route  path='/manageusers' element={<ManageUser/>}/>
        <Route  path='/adduser' element={<AddUser/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/recording" element={<NewUser/>}/>
      </Routes>
    </Router>
    </React.Fragment>

  );
}

export default App;