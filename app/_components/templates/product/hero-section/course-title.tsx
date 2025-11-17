import React from 'react'

const CourseTitle = ({text}: {text: string}) => {
  return (
    <div>
        <h2 className='text-xl md:text-3xl font-extrabold'>
            {text}
        </h2>
    </div>
  )
}

export default CourseTitle