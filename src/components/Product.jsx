import React, { useRef } from 'react'

const Product = ({ product, setProducts }) => {
  const number = useRef(0);

  const handleClick = () => {
    console.log(number.current.value)
    fetch(`http://localhost:3000/farmacos?id=${product.id}&quantity=${number.current.value}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((res) => setProducts(res.farmacos));
  };
  return (
    <div className="w-[254px] h-[353px] border-2 rounded-xl border-slate-400 pt-4">
      <h1 className='text-black text-2xl font-medium text-center'>{product.name}</h1>
      <img src={product.imageUrl} alt="" className='h-[230px] w-[250px] object-contain' />
      <h2 className='text-center mb-1'>Remains {product.quantity}</h2>
      <div className='h-auto flex items-center gap-6'>
        <span className='ml-6'>{product.price}$</span>
        <input type="number" ref={number} defaultValue={0} className='w-[60px] border border-black rounded-md p-1' />
        <button onClick={handleClick} className='w-[60px] border-2 border-red-600 rounded-md p-1 text-red-600 transition-all hover:bg-red-600 hover:text-white active:scale-110'>Buy</button>
      </div>
    </div>
  )
}

export default Product