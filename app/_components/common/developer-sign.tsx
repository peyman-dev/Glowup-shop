import Link from 'next/link'
import React from 'react'

const DeveloperSign = () => {
  return (
    <div className='flex items-center justify-center gap-1 text-sm w-full p-1 mb-24 mt-30  md:mb-0 opacity-90'>
        <span>توسعه یافته با ❤️ توسط</span>
        <Link href={"https://t.me/this_peyman"} className='text-red-500 font-medium'>پیمان‌ احمدی</Link>
    </div>
  )
}

export default DeveloperSign