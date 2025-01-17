import Link from 'next/link'
import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div className=''>
    <div className='h-48 w-full rounded-xl dark:bg-white bg-black mb-4'></div>
    <p className='uppercase font-medium leading-relaxed px-1'>{blog.title?.slice(0,40)}...</p>
    <p className='text-base text-opacity-50 mt-2 font-light px-1'>{blog.description?.slice(0, 80)}...</p>
    <p className='mt-3 border bg-opacity-50 rounded-xl px-4 py-2 w-fit'><Link href=''>Read more</Link></p>
  </div>
  )
}

export default BlogCard
