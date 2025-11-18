import Link from 'next/link'
import React from 'react'

const PaymentButton = () => {
  return (
    <Link id='payment-link' tabIndex={1} href="https://reymit.ir/Jazabiyatclub" className='w-full h-12 border-2 border-red-800 hover:opacity-90   flex items-center justify-center gap-2 rounded-md duration-300 transition-all bg-linear-to-t from-red-600 to-red-500 text-white font-medium focus-within:ring-4 ring-red-500/40'>
        خرید دوره
    </Link>
  )
}

export default PaymentButton