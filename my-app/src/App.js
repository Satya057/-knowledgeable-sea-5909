
import './App.css';
import { NavBar } from './Components/Home_NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Components/LogIn/LogIn';
import { Register } from './Components/LogIn/Register/Register';
import Home from './Components/Home/Home';
import ExploreInvestment from './Components/ExploreInvestment/ExploreInvestment'
import ExploreDisplay from './Components/ExploreInvestment/ExploreDisplay'
import { ChakraProvider } from '@chakra-ui/react';
import ToUnlock from './Components/ExploreInvestment/ToUnlock'
import Footer from './Components/Home/HomeFooter/Footer'
import About from './Components/Extras/About';
import Faq from './Components/Extras/Faq';
import Privacy from './Components/Extras/Privacy';
import Terms from './Components/Extras/Terms';
import Availability from './Components/Hotels/Availability';
import HotelsPage from './Components/Hotels/HotelsPage';
import HotelPage from './Components/Hotels/HotelPage';
function App() {
   console.log(process.env.REACT_APP_BASE_URL);
  return (<>
    <div className="App">
    <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new-login" element={<LogIn/>}/>
      <Route path="/new-register" element={<Register/>}/>
      <Route path='/explore-investment' element={
        <ChakraProvider>
      <ExploreInvestment/>
        </ChakraProvider>
      } />
      <Route path='/explore-investment/:id' element={
        <ChakraProvider>
      <ExploreDisplay/>
        </ChakraProvider>
      } />
       <Route path='/tounlock' element={
        <ChakraProvider>
       <ToUnlock/>
        </ChakraProvider>
       } />
       <Route path="/about" element={<ChakraProvider><About/></ChakraProvider>}/>
       <Route path="/faq" element={<ChakraProvider><Faq/></ChakraProvider>}/>
       <Route path="/privacy" element={<ChakraProvider><Privacy/></ChakraProvider>}/>
       <Route path="/terms" element={<ChakraProvider><Terms/></ChakraProvider>}/>
       <Route path="/holiday-homes/:id" element={<ChakraProvider><Availability/></ChakraProvider>}/>
       <Route path="/search" element={<ChakraProvider><HotelsPage/></ChakraProvider>}/>
       <Route path="/search/:id" element={<ChakraProvider><HotelPage/></ChakraProvider>}/>

          </Routes>
          <Footer/>
</div>
     </>
  );
}

export default App;
