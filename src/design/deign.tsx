
import Nav from '../navbar/nav'
import logo1 from "../assets/spartants.png"
import logo2 from "../assets/batman2.png"
import logo3 from "../assets/panthar.png"
import logo4 from "../assets/jump.png"
import video1 from "../assets/videos/video1.mp4"

export default function deign() {
  return (
    <div>
        <div className='table-fixed'>
            <Nav />
        </div>
        <div>
            <div className=' max-w-[1400px] mx-auto flex justify-center items-center flex-col'>
                <p className='uppercase text-[10px] sm:text-[17px] sm:pt-[100px] pt-[10px]'>Accilarating the shift to web3.0 gaming</p>
                <h1 className='font-bold font-font1 text-[44px] md:text-[185px] lg:text-[240px] sm:text-[160px] '>PERION</h1>
                <div className='flex w-[100%] justify-evenly py-4 items-center '>
                    <img className='bg-white w-10 h-10 sm:w-32 sm:h-32 rounded-full ' src={logo1} alt="" />
                    <img className='bg-white w-10 h-10 sm:w-32 sm:h-32 rounded-full ' src={logo2} alt="" />
                    <img className='bg-white w-10 h-10 sm:w-32 sm:h-32 rounded-full ' src={logo3} alt="" />
                    <img className='bg-white w-10 h-10 sm:w-32 sm:h-32 rounded-full ' src={logo4} alt="" />
                </div>
            </div>
            <img src="" alt="" />
            
        </div>
        <div className='max-w-[1200px] mx-auto'>
            <video className='rounded-2xl ' src={video1} autoPlay muted loop/>
        </div>
        <div className='max-w-[1200px] mx-auto grid sm:grid-cols-2 py-10 sm:py-20'>
            <div className='text-center sm:text-left sm:max-w-[300px] py-2 sm:py-0'>

            <h3 className='font-font1 uppercase font-bold text-green-500 text-[20px]  sm:text-[26px]'>trasury</h3>
            <h1 className='text-[25px] capitalize sm:text-[33px]'>backing all funders that are re-imagining gaming paradigms</h1>
            </div>
            <div className='flex items-center justify-center sm:items-end  sm:justify-end'>
                <button className='px-3 py-0 rounded-full border-2 md:text-[20px]'> full portfolio -</button>
            </div>
        </div>

    </div>
  )
}
