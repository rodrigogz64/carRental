import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Bookings from '../pages/Bookings';
import Catalog from '../pages/Catalog';
import SellCar from '../pages/SellCar';
import Settings from '../pages/Settings';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" element={<Dashboard />}/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="/*" element={<h1>404</h1>} />
    </Routes>
  );
}
