
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Media from './components/Media';
import Team from './components/Team';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
   <Router>
   <Header/>
   <div className='relative grid h-screen grid-cols-12'>
    <div className='col-span-2 h-full bg-green-500 relative'>
   <Sidebar/>

    </div>
    <Routes>
    <Route exact path='/krishna' element={<Body/>}/>

    <Route exact path='/koirala' element={<Home/>}/>
    <Route exact path='/Footer' element ={<Footer/>}/>
    <Route exact path='/Media' element ={<Media/>}/>
    <Route exact path='/Team' element ={<Team/>}/>
    
    </Routes>
    
    {/* <div className='col-span-10 bg-green-600'>
   <Body/>

    </div> */}
   </div>
  
   </Router>
  );
}

export default App;
