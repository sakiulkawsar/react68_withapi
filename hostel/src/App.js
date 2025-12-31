import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './component/Footer'
import Header from './component/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Accomodation from './Pages/Accomodation'

import Gallery from './Pages/Gallery';
import Elements from './Pages/Elements';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Blog_single from './Pages/Blog_single';


function App() {
  return (
    
   <Router>
    <Header />
     
    <div className='content'>
     
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/accomodation' element={<Accomodation />} />
     
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/elements' element={<Elements />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog_single' element={<Blog_single />} />



   </Routes>
   <Footer />


    </div>
   </Router>
   
  );
}

export default App;
