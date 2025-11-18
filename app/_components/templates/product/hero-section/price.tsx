import React from 'react'

const Price = () => {
  return (
    <div className="space-y-1">

    <div className='text-lg flex items-end gap-2'>
        <p className='text-3xl font-bold'>
            {Number(990_000).toLocaleString('fa-Ir')}
        </p>
        <span>تومان</span>
    </div>
    <div className='text-base flex items-end gap-2 select-none text-zinc-500'>
        <p className='text-xl line-through font-bold'>
            {Number(5_600_000).toLocaleString('fa-Ir')}
        </p>
        <span>تومان</span>
        <span>
            {`(${Number(80).toLocaleString('fa-IR')}% تخفیف)  `}
        </span>
    </div>
    </div>
  )
}

export default Price