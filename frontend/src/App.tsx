import { Header } from "./shared/components/Header"
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
