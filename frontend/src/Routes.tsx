import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </Router>
    )
}