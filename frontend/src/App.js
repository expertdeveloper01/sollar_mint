
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './app/routes/Routes';
import { SollarMintProvider } from './context/SollarMint';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <SollarMintProvider>
          <Routes />
        </SollarMintProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
