import React from 'react'
import CollectionCard from './collectionCard'
const Collection = () => {
  return (
    <>
      <section id="Collection" className=''>
        <div className="container">
            <h2 className='text-center font-bold text-6xl font-popins'>New Collection</h2>
            <p className='text-2xl text-center font-popins py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="sm:grid grid-cols-1 lg:grid lg:grid-cols-3 gap-24">
                <CollectionCard title="Sweater" url="/collection_1.png"/>
                <CollectionCard title="Jeans" url="/collection_2.png"/>
                <CollectionCard title="Baskets" url="/collection_3.png"/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Collection
