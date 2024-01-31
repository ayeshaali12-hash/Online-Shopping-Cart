import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
 Navigate
} from "react-router-dom";
import Navbar from './Navbar';
import Cart from './Cart';
import Home from './Home';
import NotFound from './NotFound';
import React from 'react';
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        
        <Routes>
      <Route path="/" exact element={<Home />}>
          </Route>
          <Route path="/not-found" element={<NotFound />}>
            </Route>
          <Route path="/*" element={<Navigate to="./not-found" />}>
            </Route>
          <Route path="/cart" exact element={<Cart />}>
          </Route>
          {/* <Redirect to='/not-found'/> */}


          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
