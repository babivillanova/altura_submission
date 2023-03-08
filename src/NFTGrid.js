import React, { useContext, useState } from 'react';
import NFTContext from './NFTContext';
import NFTCard from './NFTCard';


import './styles/styles.css';

function NFTGrid() {
  const { nfts } = useContext(NFTContext);
 

  return (
    <div className="cards__container">
      {nfts.map((nft) => (
        <NFTCard key={nft.id} nft={nft} />
      ))}
    </div>
        
    
  );
}

export default NFTGrid;