import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Batches from './Components/Pages/Batches';
import Testimonials from './Components/Pages/Testimonials';
import Job from './Components/Pages/Job';
import Contactus from './Components/Pages/Contactus';
import Nav from './Components/Nav_Footer/Nav';
import Footer from './Components/Nav_Footer/Footer';

import Java from './Components/Pages/Courses/Java.jsx';
import Python from './Components/Pages/Courses/Python.jsx';
import DataAnalytics from './Components/Pages/Courses/DataAnalytics.jsx';
import Cloud from './Components/Pages/Courses/Cloud.jsx';
import Frontend from './Components/Pages/Courses/Frontend.jsx';
import PhpFullStack from './Components/Pages/Courses/PhpFullStack.jsx';
import Javabasic from './Components/Pages/Courses/Javabasic.jsx';
import PythonBasic from './Components/Pages/Courses/PythonBasic.jsx';
import Database from './Components/Pages/Courses/Database.jsx';
import C from './Components/Pages/Courses/C.jsx';
import Angular from './Components/Pages/Courses/Angular.jsx';
import Phpbasic from './Components/Pages/Courses/Phpbasic.jsx';
import  React from './Components/Pages/Courses/React.jsx';



function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/batches' element={<Batches />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/job' element={<Job />} />

          <Route path='/java' element={<Java/>} />
          <Route path='/python' element={<Python/>} />
          <Route path='/Phpfullstack' element={<PhpFullStack/>} />
          <Route path='/frontend' element={<Frontend/>} />
          <Route path='/ccpp' element={<C/>} />
          <Route path='/javabasic' element={<Javabasic/>} />
          <Route path='/Pythonbasic' element={<PythonBasic />} />
          <Route path='/dataanalytics' element={<DataAnalytics/>} />
          <Route path='/cloud' element={<Cloud/>} />
          <Route path='/database' element={<Database/>} />
          <Route path='/angular' element={<Angular/>} />
          <Route path='/phpbasic' element={<Phpbasic/>} />
          <Route path='/react' element={<React/>} />

        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
