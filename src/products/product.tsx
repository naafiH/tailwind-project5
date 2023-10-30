import React from 'react'
import Featured from '../featured/featured'
import warbg from "../assets/warimg.jpeg"
import sony from "../assets/sony.png"
import polygon from "../assets/top-polygon.jpg"

export default function product() {
  return (
    <div className='max-w-[1280px] mx-auto'>
        <Featured/>
        <h1 className='capitalize font-bold text-[20px] md:text-center'>featured news</h1>
        <div className=' bg-cover bg-center rounded-3xl h-[200px] md:h-[300px] lg:h-[400px] my-5 w-full flex  justify-start items-end  ' style={{backgroundImage:`url(${warbg})`}}>
          <div className='flex flex-col px-2 py-3 '>
          <h1 className='text-[17px] sm:text-[22px] md:text-[30px] sm max-w-[400px]'>Sharpnel showcases world class gaming expiriences at GDC</h1>
          <h2 className='uppercase text-[14px] sm:text-[19px] md:text-[27px] text-green-600 font-extrabold'>27 march 23</h2>
          </div>
        </div>
        <div className='grid md:grid-cols-2'>
          <div className='w-[250px] rounded-3xl sm:w-[350px] mx-auto'>
            <img className='w-[250px] rounded-3xl sm:w-[400px] mx-auto' src={sony} alt="" />
            <div className='px-4'>
            <h1 className='text-[14px] sm:text-[19px] md:text-[26px] sm max-w-[400px]'>Sharpnel showcases world class gaming expiriences at GDC</h1>
          <h2 className='uppercase text-[10px] sm:text-[14px] md:text-[20px] text-green-600 font-extrabold'>27 march 23</h2>
            </div>
          </div >
          <div className='w-[250px] rounded-3xl sm:w-[350px] mx-auto'>
            <img className='w-[250px] rounded-3xl sm:w-[400px] sm:h-[240px] mx-auto' src={polygon} alt="" />
            <div className='px-4'>
            <h1 className='text-[14px] sm:text-[19px] md:text-[26px] sm max-w-[400px]'>Sharpnel showcases world class gaming expiriences at GDC</h1>
          <h2 className='uppercase text-[10px] sm:text-[14px] md:text-[20px] text-green-600 font-extrabold'>27 march 23</h2>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center my:3 px-3 sm:my-28 max-w-[500px] mx-auto'>
          <p className='font-font1 uppercase font-bold text-green-500 text-[17px]  sm:text-[20px]'>Sperc token</p>
          <h1 className='text-[25px] capitalize text-center sm:text-[33px]'>Our worlds run on PerionCredits</h1>
          <button className='px-3 mx-4  text-black bg-white my-3 py-2 text-[11px] rounded-full  md:text-[17px] font-bold uppercase'>Visit dao</button>
        </div>
        <hr />
    </div>
  )
}
