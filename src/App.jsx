import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, About, Contact } from './pages';
import { CounterContext } from './context/CounterContext';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  const hanldeCounter = () => {
    setCounter((prev) => prev + 1);
  }
  return (
    <CounterContext.Provider value={counter}>     
      <BrowserRouter>
      <button className='bg-[#6f9dff] px-4 py-2 m-3' onClick={hanldeCounter}>Cargar counter</button>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            // Para cuando no se encuntre la ruta
            <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CounterContext.Provider>
  );
}

export default App;
