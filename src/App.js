import './App.css';
import Home from './screen/home/home';
import { Route, Routes } from 'react-router-dom';
import Main from './screen/main';
import Detail from './screen/detail/detail';
import Login from './screen/login/login';
import Favourite from './screen/favourite/favourite';

function App() {
  return (
  <Routes>
     <Route path="/" element={<Main/>} >
         <Route path="/" element={<Home/>} />
         <Route path="home" element={<Home />} />
         <Route path="detail/:id" element={<Detail />} />
         <Route path="favourite" element={<Favourite />} />
    </Route>

    <Route path="login" element={<Login />} />
  </Routes>
  );
}

export default App;
