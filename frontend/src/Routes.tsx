import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Books } from './pages/Books';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/books' element={<Books />} />

                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </BrowserRouter>
    )
}