import React from 'react'
import SignIn from '@/components/auth/sign-in'
import Link from 'next/link'
export default function Page() {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className=' absolute top-10 left-10 '>
        <Link href={"/"} className='text-3xl font-semibold text-blue-500'>Testimonials</Link>
      </div>
      <div className=' max-w-none md:w-1/2 md:h-full  md:bg-gray-100'>

      </div>
      <div className='w-full md:w-1/2 md:mr-5'>
        <SignIn></SignIn>
      </div>
    </div>
  )
}
