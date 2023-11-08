import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home, About, Contact } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        // Para cuando no se encuntre la ruta
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
