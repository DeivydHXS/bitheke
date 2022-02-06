import { Header } from "./shared/components/Header/Header"
import { AppRoutes } from "./Routes"
import { AppThemeProvider } from "./shared/contexts";


function App() {
  return (
    <AppThemeProvider>
      <Header />
      <AppRoutes />
    </AppThemeProvider>
  );
}

export default App
