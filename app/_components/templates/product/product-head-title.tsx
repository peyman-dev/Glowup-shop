import React from 'react'

const ProductHeadTitle = ({text}: {text: string}) => {
  return (
    <div>
      <h1 className='text-xl md:text-2xl font-black'>
        {text}
      </h1>
    </div>
  )
}

export default ProductHeadTitle