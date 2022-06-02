import { Home } from './components/Pages/Home/Home';
import { AboutUS } from './components/Pages/AboutUS/AboutUS';
import { ContactUS } from './components/Pages/ContactUS/ContactUS';
import { NotFound } from './components/Pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import { UseState } from './components/Pages/UseState/UseState';
import { ContadorImagen } from './components/Pages/CotsdorImagen/ContadorImagen';
import { RickAndMorty } from './components/Pages/RickAndMorty/RickAndMorty.jsx';
import { Gifs } from './components/Pages/Gifs/Gifs';



function App() {
  return (
    <> 
      <Routes>    
        <Route path='/' element={<Home/>}/>
        <Route path='/useState' element={<UseState/>}/>
        <Route path='/contactUS' element={<ContactUS/>}/>
        <Route path='/useEffect' element={<AboutUS/>}/>
        <Route path='/contadorImagen' element={<ContadorImagen/>}/>
        <Route path='/tenor' element={<Gifs/>}/>
        <Route path='/rickAndmorty' element={<RickAndMorty />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
