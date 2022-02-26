import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path='/books' element={() => (<></>)} />

                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    );
}