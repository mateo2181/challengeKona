import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import TeamsPage from './pages/TeamsPage';
import TeamDetail from './components/TeamDetail';

const queryClient = new QueryClient();

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <header className='App-header'>
            DASHBOARD
        </header>
        <main className='App-main'>
          <BrowserRouter>
            <Routes>
              <Route path="teams" element={<TeamsPage />}>
                  <Route
                    index
                    element={
                      <div style={{ padding: '1rem' }}>
                        <p>Select a team to show more details.</p>
                      </div>
                    }
                  />
                  <Route path=":teamId" element={<TeamDetail />} />
              </Route>
              <Route index element={<Navigate to="teams" />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
