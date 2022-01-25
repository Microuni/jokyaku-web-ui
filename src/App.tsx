import { extendTheme, VechaiProvider, colors } from '@vechaiui/react';
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import Scaffolding from './js/components/layout/Scaffolding';
import ProtectedRoute from './js/components/ProtectedRoute';
import Splash from './js/components/Splash';
import routes from './js/config/routes';
import axios from './js/utils/axios';
import SessionContext, { SessionType } from './js/utils/session';

const theme = extendTheme({
  cursor: "pointer"
});

function App() {
  const [session, setSession] = React.useState<SessionType>(React.useContext(SessionContext));

  const fetchingUser = false && session.isLoggedIn && !session.user;

  React.useEffect(() => {
    if (fetchingUser) {
      axios.get('/actor').then(response => {
        setTimeout(() => {
          setSession({
            ...session,
            user: response.data
          });
        }, 1000)
      });
    }
  }, [session]);

  return (
    <SessionContext.Provider value={session}>
      <VechaiProvider theme={theme}>
        <BrowserRouter>
          {fetchingUser ? (
            <Scaffolding splash={true}>
              <Splash />
            </Scaffolding>
          ) : (
            <Routes>

              {Object.keys(routes).map((key: string, index: number) => {
                let { element, auth, ...attrs } = routes[key];

                const Component = element(session);

                let innerElement = (
                  <Scaffolding>
                    <Component />
                  </Scaffolding>
                );

                if (auth) {
                  innerElement = (
                    <ProtectedRoute>{innerElement}</ProtectedRoute>
                  )
                }

                return (
                  <Route element={innerElement} key={index} {...attrs} />
                );
              })}

            </Routes>
          )}
        </BrowserRouter>
      </VechaiProvider>
    </SessionContext.Provider>
  );
}

export default App;
