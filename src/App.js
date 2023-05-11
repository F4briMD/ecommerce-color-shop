import './css/Estilos.css'
import './css/Header.css'
import './css/Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import Registro from './pages/Registro'
import Detalles from './pages/Detalles';

import Footer from './components/Footer';
import Container  from 'react-bootstrap/Container';
import Productos from './components/Productos';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='registro' element={<Registro />} />
          <Route path='login' element={<Login />} />
          <Route path='productos' element={<Productos/>}/>
          <Route path='/productos/:id' element={<Detalles />} />
        </Routes> 
        </Container>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
