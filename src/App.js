import React from 'react';
import './App.scss';
import {

  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';


function App() {
  return (
    <>
      <React.StrictMode>
        <HashRouter>
          <div className="App_container">


            <div className="main">
              <Header exact path="/" element={<Header />} />

              <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="/About" element={<About />} />

                <Route exact path="/Contact" element={<Contact />} />

              </Routes>

            </div>
          </div>
        </HashRouter>
      </React.StrictMode>


    </>
  );
}
export default App;