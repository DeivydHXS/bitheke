import { AppBar, Button, InputBase, SvgIcon, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useAppThemeContext } from "../../contexts";

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
                <Button onClick={toggleTheme}>toggleTheme</Button>
            </Toolbar>
        </AppBar> 
    );
}