import { createTheme } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#fff',
        },
        secondary: {
            main: blue[500],
            dark: blue[400],
            light: blue[300],
            contrastText: '#fff',
        },
        background: {
            default: '#f7f6f3',
            paper: '#fff',
        }
    }
});