import { useState } from 'react';
import { UserContext } from './hooks/UserContext';
import { AppRoutes } from './Routes';
import Header from './components/Header';
import { UserInterface } from './interfaces';

function App() {
  const [user, setUser] = useState<UserInterface>({
    id: '',
    name: '',
    email: '',
    token: ''
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Header />
      <AppRoutes />
    </UserContext.Provider>
  );
}

export default App
