import React from 'react'
import Design from '../design/deign'
import sharpnel from "../assets/sharpnel.webp"
import game2 from "../assets/metalcore.jpg"
import game3 from "../assets/img3.jpg"
import game4 from "../assets/webzilla.jpg"

export default function cards() {
  return (
    <div>
    <Design/>
    <div>
        <h1 className='sm:text-[19px] text-[12px]  uppercase sm:py-4 py-2'>featured allocations</h1>
        <div className='grid sm:grid-cols-4 gap-2'>
            <div className=''>
                <img className='rounded-xl' src={sharpnel} alt="" />
                <h1 className='text-center text-[10px] sm:text-[20px] font-bold sm:py-4 py-1'>sharpnel</h1>
            </div>
            <div className=''>
                <img className='rounded-xl ' src={game2} alt="" />
                <h1 className='text-center text-[10px] sm:text-[20px] font-bold sm:py-4 py-1'>sharpnel</h1>
            </div><div className=''>
                <img className='rounded-xl' src={game3} alt="" />
                <h1 className='text-center text-[10px] sm:text-[20px] font-bold sm:py-4 py-1'>sharpnel</h1>
            </div><div className=''>
                <img className='rounded-xl' src={game4} alt="" />
                <h1 className='text-center text-[10px] sm:text-[20px] font-bold sm:py-4 py-1'>sharpnel</h1>
            </div>
        </div>
    </div>

    </div>
  )
}
