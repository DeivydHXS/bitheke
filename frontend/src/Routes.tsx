import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { GetBook } from './pages/Books/GetBook';
import { ListBooks } from './pages/Books/ListBooks';
import { Home } from './pages/Home';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path='/books' element={<ListBooks />} />
                <Route path='/books/:id' element={<GetBook />} />

                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    );
}