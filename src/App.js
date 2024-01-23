import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Forms from './component/Blockexpo/Blockexploler';

import newpage from './component/Blockexpo/newpage';
import './styles.css';
import './App.css';


function App() {
 return (
   <div >
     <Forms />
    
   </div>
  
    // <Routes>
    // <Route path="/" element={<Forms />} />
    // <Route path="/pagination" element={<Pagination />} />
    
    // </Routes>
    
 );
}

export default App;

