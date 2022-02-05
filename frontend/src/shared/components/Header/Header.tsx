import { AppBar, InputBase, SvgIcon, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export function Header() {
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
            </Toolbar>
        </AppBar> 
    );
}