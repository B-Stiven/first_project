import { Home } from './components/Pages/Home/Home';
import { AboutUS } from './components/Pages/AboutUS/AboutUS';
import { ContactUS } from './components/Pages/ContactUS/ContactUS';
import { NotFound } from './components/Pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import { UseState } from './components/Pages/UseState/UseState';



function App() {
  return (
    <>
      
      <Routes>    
        <Route path='/' element={<Home/>}/>
        <Route path='/useState' element={<UseState/>}/>
        <Route path='/useCustom' element={<ContactUS/>}/>
        <Route path='/useEffect' element={<AboutUS/>}/>
        <Route path='/rickAndmorty' element={<AboutUS/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
