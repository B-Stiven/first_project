import { Home } from './components/Pages/Home/Home';
import { NotFound } from './components/Pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import { ContadorImagen } from './components/Pages/CotsdorImagen/ContadorImagen';
import { Inputletras } from './components/UI/inputletras/inputletras';
import { Reloj } from './components/Pages/Reloj/Reloj';
import { ArraysUseState } from './components/Pages/ArraysUseState/ArraysUseState';


// import { UseState } from './components/Pages/UseState/UseState';
// import { RickAndMorty } from './components/Pages/RickAndMorty/RickAndMorty.jsx';
// import { Gifs } from './components/Pages/Gifs/Gifs';
// import { AboutUS } from './components/Pages/AboutUS/AboutUS';
// import { ContactUS } from './components/Pages/ContactUS/ContactUS';


function App() {
  return (
    <> 
      <Routes>    
        <Route path='/' element={<Home/>}/>
        <Route path='/contador' element={<ContadorImagen/>}/>
        <Route path='/leer' element={<Inputletras/>}/>
        <Route path='/reloj' element={<Reloj/>}/>
        <Route path='/lista' element={<ArraysUseState/>}/>
        
        {/* <Route path='/contactUS' element={<ContactUS/>}/>
        <Route path='/useEffect' element={<AboutUS/>}/>
        <Route path='/contadorImagen' element={<ContadorImagen/>}/>
        <Route path='/tenor' element={<Gifs/>}/>
        <Route path='/rickAndmorty' element={<RickAndMorty />}/> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
