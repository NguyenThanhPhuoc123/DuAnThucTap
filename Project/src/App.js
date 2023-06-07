import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home.js";
import Menu from './components/menu.js';
import Event from './components/event/event.js';
import Event1 from './components/event/sk1.js';
import RegisterForm from './components/contact/contact.js';
import Thanhtoan from './components/thanhtoan/thanhtoan.js';
import Thanhtoantc from './components/thanhtoantc/thanhtoantc.js';

function App() {
  return (
    <div className="row d-flex justify-content-evenly">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}>
          <Route index element={Home()}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/event/sk1" element={<Event1/>}/>
          <Route path="/contact" element={<RegisterForm/>}/>
          <Route path="/thanhtoan" element={<Thanhtoan/>}/>
          <Route path="/thanhtoan/thanhtoantc" element={<Thanhtoantc/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
