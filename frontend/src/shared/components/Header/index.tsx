import { AppBar, Button, InputBase, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useAppThemeContext } from "../../contexts";
import { Link } from "react-router-dom";

export function Header() {
    const { toggleTheme } = useAppThemeContext();
    
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6" >
                    BITHEKE
                </Typography>
                <SearchIcon />
                <div>
                    <InputBase placeholder="Searching a book..." />
                </div>
                <Button onClick={toggleTheme} variant="contained">toggleTheme</Button>
                <nav>
                    <Link to="/books">Books</Link>
                </nav>
            </Toolbar>
        </AppBar> 
    );
}