import React from 'react';

function NFTModal({ onClose, children }) {
  return (
    <div className="nft__modal">
      <div className="nft__modal__content">
      <button className="close__button" onClick={onClose}>x</button>
        {children}
      </div>
    </div>
  );
}

export default NFTModal;