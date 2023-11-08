import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Category from './components/Category';
import Category2 from './components/Category2';
import { ChakraProvider } from '@chakra-ui/react';
import Info from './components/Info';
import Tophead from './components/Tophead';
import Blank from './components/Blank';
import Slider from './components/Slider';
import Social from './components/Social';
import Footer from './components/Footer';
import FormResume from './components/FormResume';
import { Route, Routes, Navigate} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/Router/AppRouter';

//#212529
function App() {
  document.body.style = 'background: #151515;';

  return (
   
     
     <AppRouter/>
  
      
  
  );

}

export default App;
