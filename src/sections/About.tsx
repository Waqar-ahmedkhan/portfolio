import React from 'react'

function About() {
  return (
    <>
      <section className='w-full h-screen dark:bg-gray-900 py-16 '>
        <div className='flex items-center align-middle flex-col'>
          <h1 className='text-teal-400 uppercase text-xl tracking-wide mb-4 '> about me </h1>
          <h2 className='text-4xl text-gray-700 mb-4 dark:text-white '>A Glimpse Into My World </h2>
          <h2 className='text-sm text-gray-500 mb-4 '>Learn more about who i am, what i do, and what inspires me </h2>
        </div>

      </section>
    </>
  )
}

export default About