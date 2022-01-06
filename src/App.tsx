import { VechaiProvider } from '@vechaiui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Scaffolding from './js/components/layout/Scaffolding';
import routes from './js/config/routes';
import axios from './js/utils/axios';
import SessionContext, { SessionType } from './js/utils/session';

function App() {
  const [session, setSession] = React.useState<SessionType>(React.useContext(SessionContext));

  React.useEffect(() => {
    if (session.isLoggedIn && !session.user) {
      axios.get('/actor').then(response => {
        setSession({
          ...session,
          user: response.data
        });
      });
    }
  }, [session]);

  return (
    <SessionContext.Provider value={session}>
      <VechaiProvider>
        <BrowserRouter>
          <Routes>

            {Object.keys(routes).map((key: string, index: number) => {
              let { element, ...attrs } = routes[key];

              const Component = element(session);

              return (
                <Route element={(
                  <Scaffolding>
                    <Component />
                  </Scaffolding>
                )} key={index} {...attrs} />
              );
            })}

          </Routes>
        </BrowserRouter>
      </VechaiProvider>
    </SessionContext.Provider>
  );
}

export default App;
