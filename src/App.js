import React from 'react';
import NFTContext, { NFTProvider } from './NFTContext';
import NFTGrid from './NFTGrid';
import './styles/styles.css';

function App() {
  return (
    <NFTProvider>
      <div className="App">
        <NFTGrid />
      </div>
    </NFTProvider>
  );
}

export default App;