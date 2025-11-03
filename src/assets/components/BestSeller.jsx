import React from 'react'
import BestSellerCard from './BestSellerCard'
import Button1 from './Button1'

const BestSeller = () => {
  return (
    <>
      <section id="best_seller" className='pt-24 pb-44 bg-amber-800'>
        <div className="container">
            <div className='sm:flex sm:flex-col text-center lg:text-start lg:flex lg:flex-row justify-between items-center'>
                <div className="w-md text-white font-popins font-bold">
                    <h2 className='text-6xl leading-20'>Best Seller Product</h2>
                    <p className='pt-11 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</p>
                    <div className='sm:my-10 lg:pt-10 my-0'>
                      <Button1 title="See More"/>
                    </div>
                </div>
                <div className='sm:flex flex-col text-start sm:gap-8 md:flex md:flex-row lg:flex  lg:text-start gap-8'>
                    <BestSellerCard url="\footer_img_1.png" review="*****" titie="Sweater Shirt" taka="$45.99" Newtaka="$35.99"/>
                    <BestSellerCard url="\footer_img_2.png" review="*****" titie="Pants fashion" taka="$55" Newtaka="$45.99"/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default BestSeller
