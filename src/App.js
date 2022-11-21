
import Log from './Log.js';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Register from './Register.js'; 

function App() {
  return (
 <Router>
  <div className='App'>
    <Routes>
    <Route exact path='/' element={<Log/>} />
    <Route exact path='/Log' element={<Log/>}></Route>
    <Route exact path='/Register' element={<Register/>}></Route>
    <Route exact path='/Log' element={<Log/>}></Route>
    </Routes> 
  </div>
     </Router>
  );
}

export default App;
