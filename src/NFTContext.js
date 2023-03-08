import React, { useState } from 'react';
import nfts from './nfts.json'; // Importa o arquivo JSON

const NFTContext = React.createContext();

export const NFTProvider = ({ children }) => {
  const [nftsState, setNftsState] = useState(nfts); // Cria o estado inicial com os NFTs

  // Funções para atualizar o estado dos NFTs
  const addNFT = (nft) => {
    setNftsState([...nftsState, nft]);
  };

  const removeNFT = (nft) => {
    setNftsState(nftsState.filter((item) => item.id !== nft.id));
  };

  const updateNFT = (nft) => {
    const index = nftsState.findIndex((item) => item.id === nft.id);
    const updatedNfts = [...nftsState];
    updatedNfts[index] = nft;
    setNftsState(updatedNfts);
  };

  const value = {
    nfts: nftsState,
    addNFT,
    removeNFT,
    updateNFT,
  };

  return <NFTContext.Provider value={value}>{children}</NFTContext.Provider>;
};

export default NFTContext;