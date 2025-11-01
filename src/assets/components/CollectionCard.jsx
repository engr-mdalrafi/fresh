import React from 'react'

const collectionCard = ({title,url}) => {
  return (
    <div className="relative">
        <img className='w-full' src={url} alt="collection_1" />
        <h3 className='w-10/12 py-3.5 bg-white text-2xl text-black0 font-popins text-center rounded-2xl absolute bottom-11 left-1/2 -translate-1/2'>{title}</h3>
    </div>
  )
}

export default collectionCard
