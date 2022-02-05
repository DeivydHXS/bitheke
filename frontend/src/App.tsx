import { Header } from "./shared/components/Header/Header"
import { AppRoutes } from "./Routes"
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./shared/themes";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Header />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App
