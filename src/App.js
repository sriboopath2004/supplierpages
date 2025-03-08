import './App.css';
import { Routes , Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Supplierpage from './Components/Supplierpage';
import SupplierInfo from './Components/SupplierInfo';
import Supportpage from './Components/Supportpage';

function App() {
  return (
    <div>
       <Routes> 
      <Route path="/" element ={<Login />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Supplierpage" element={<Supplierpage />} />
      <Route path="/SupplierInfo" element={<SupplierInfo />} />
      <Route path="/Supportpage" element={<Supportpage />} />
      </Routes>
    </div>
  );
}

export default App;
