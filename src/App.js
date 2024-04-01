import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Customer from './pages/Customer';
import Income from './pages/Income';
import Promote from './pages/Promote';
import Help from './pages/Help';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/product' element={<Product />} />
					<Route path='/customer' element={<Customer />} />
					<Route path='/income' element={<Income />} />
					<Route path='/promote' element={<Promote />} />
					<Route path='/help' element={<Help />} />
					<Route path='/profile' element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
