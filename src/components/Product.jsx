import React from 'react'

const Product = ({product}) => {

  return (
    <div className="w-[250px] h-[350px] border-2 rounded-xl border-slate-400">
      <h1 className='text-black text-2xl font-medium text-center'>{product.name}</h1>
      <img src={product.imageUrl} alt="" />
    </div>
  )
}

export default Product