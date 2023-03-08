import React, { useContext, useState } from "react"
import NFTContext from "./NFTContext"
import NFTModal from "./NFTModal"
import "./styles/styles.css"

function NFTCard({ nft }) {
  const { removeNFT } = useContext(NFTContext)
  const [showModal, setShowModal] = useState(false)

  const handleCardClick = () => {
    setShowModal(true)

  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handlePurchaseClick = () => {
    window.open(`https://opensea.io/assets/${nft.address}/${nft.id}`, '_blank');
  }

  return (
    <>
      <div className="card__item" onClick={handleCardClick}>
        <img src={nft.image} alt={nft.name} />
        <h3>{nft.name}</h3>
        <p>{nft.description}</p>
        {/* <p>Owner: {nft.owner}</p> */}
      </div>
      {showModal && (
        <>
          {/* <div className="NFTModalBackground" /> */}
          <NFTModal onClose={handleModalClose}>
            <img src={nft.image} alt={nft.name} />
            <h2>{nft.name}</h2>
            <p>{nft.description}</p>
            <p>Owner: {nft.owner}</p>
            <button className="purchase__button" onClick={handlePurchaseClick}>Purchase on OpenSea</button>
          </NFTModal>
        </>
      )}
    </>
  )
}

export default NFTCard
