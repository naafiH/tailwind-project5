import React from 'react'
import Product from '../products/product'
import send from "../assets/send.png"

export default function footer() {
  return (
    <div>
      <Product/>
      
      <div className='max-w-[600px] mx-auto flex flex-col items-center justify-center'>
      <h1 className='font-font1 uppercase font-bold py-5 text-[17px]  sm:text-[20px]'>keep it with us if you can</h1>
      <p className='text-center text-[10px] text-zinc-300 max-w-[250px] sm:max-w-[300px] my-2 lg:max-w-[400px] sm:text-[12px]'>stay up to date with the latest news, products</p>
      <div className='flex px-2 py-2 bg-zinc-800 max-w-[300px] mx-auto'>
      <input className='bg-transparent' type="text" placeholder='Slippy@starfox.com' /><img className='w-5' src={send} alt="" />
      </div>
      <p className='max-w-[300px] mx-auto text-center text-[13px] sm:py-[100px] py-4 '>copyright. perion DAQ alright reserved Terms and condition | privacy policy</p>
    </div>
    </div>  
    
  )
}
