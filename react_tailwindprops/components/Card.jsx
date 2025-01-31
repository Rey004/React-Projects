import React from 'react'

function Card({name='Dogecoin',price=6000,gif="https://media0.giphy.com/media/9C1nyePnovqlpEYFMD/200.webp?cid=790b7611ybndpoalixooti31vr916ckg2fvr0ukk5ylf2cj7&ep=v1_gifs_search&rid=200.webp&ct=g"}) {
  return (
    <><div className="flex flex-col rounded-xl  p-4"
    style={{
      border: '0.88px solid',

      backdropFilter: 'saturate(180%) blur(14px)',
      background: ' #ffffff0d',
    }}
  >
    <div>
      <img
        src={gif}
        alt="nft-gif"
        width="400"
        height="400"
        className="rounded-xl"
      />
    </div>
    <div className="flex flex-col  rounded-b-xl py-4 ">
      <div className="flex justify-between">
        <h1 className="font-RubikBold ">{name}</h1>
        <h1 className="font-bold font-RubikBold">Price</h1>
      </div>
      <div className="flex  justify-between font-mono">
        <p>#XXX</p>
        <p>{price}</p>
      </div>
    </div>
  </div></>
  )
}

export default Card