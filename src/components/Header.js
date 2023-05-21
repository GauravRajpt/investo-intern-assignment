import React from 'react'

function Header() {
  return (
    <header className='bg-[url("./images/pattern-circles.svg")] bg-no-repeat bg-center h-[150px] my-7'>
        <div className='flex flex-col items-center p-7   '>
          <h1 className='text-xl font-extrabold text-[hsl(227_35%_25%)] my-2'>Simple, traffic- based pricing</h1>
          <p className='text-sm text-[hsl(225_20%_60%)]'>Sign-up for our 30-day trial.</p>
          <p className='text-sm text-[hsl(225_20%_60%)]'>No credit card required.</p>
        </div>
        
    </header>
  )
}

export default Header