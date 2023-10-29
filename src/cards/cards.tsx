import Design from '../design/deign'
import sharpnel from "../assets/sharpnel.webp"
import game2 from "../assets/metalcore.jpg"
import game3 from "../assets/img.jpeg"
import game4 from "../assets/valorant.avif"
import lap from "../assets/lap.png"
import unicorn from "../assets/unicor.jpeg"
import Cardimg2 from "../assets/cardimg2.jpeg"
import Cardimg3 from "../assets/cardimg3.webp"
import Bgdiv from "../assets/bgdiv.webp"

export default function cards() {
  return (
    <div className='max-w-[1300px] mx-auto'>
    <Design/>
    <div>
        <h1 className='sm:text-[19px] text-[12px] font-bold  uppercase sm:py-4 py-2'>featured allocations</h1>
        <div className='grid sm:grid-cols-4 gap-2'>
            <div className=''>
                <img className='rounded-xl ' src={sharpnel} alt="" />
                <h1 className='text-center text-[10px] sm:text-[20px] font-bold sm:py-4 py-1'>sharpnel</h1>
            </div>
            <div className=''>
                <img className='rounded-xl ' src={game2} alt="" />
                <h1 className='text-center text-[10px] sm:text-[20px] font-bold sm:py-4 py-1'>sharpnel</h1>
            </div><div className=''>
                <img className='rounded-xl ' src={game3} alt="" />
                <h1 className='text-center text-[10px] sm:text-[20px] font-bold sm:py-4 py-1'>sharpnel</h1>
            </div><div className=''>
                <img className='rounded-xl' src={game4} alt="" />
                <h1 className='text-center text-[10px] sm:text-[20px] font-bold sm:py-4 py-1'>sharpnel</h1>
            </div>
        </div>
    </div>
    <div className='bg-white rounded-xl  text-black pl-4 pt-4 pb-4'>
        <div className=' grid md:grid-cols-3'>
            <div className='felx items-center justify-center sm:items-center sm:justify-evenly sm:max-w-[400px] md:col-span-2 lg:justify-start md:pl '>
                <h3 className='uppercase py-2 text-[12px] sm:text-[20px] font-bold font-font1'>products</h3>
                <h1 className='text-[18px] sm:text-[30px] capitalizepy-2 mb-6 ' >creating web 3.0 product ecosystem</h1>
                <h3 className='uppercase gap-2 py-2 bold font-font1'>Zbet <button className='px-3 py-0 rounded-full border-2 md:text-[20px] bg-black text-white uppercase'>beta</button></h3>
                <p className='text-[10px] text-zinc-600 py-2 sm:text-[19px] tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius a, provident incidunt maiores quidem numquam aliquid illum, minima voluptatem consequuntur fuga repudiandae cupiditate vero odit nam! Iusto, facere aut?</p>
                <button className='px-3 my-3 py-0 rounded-full border-2 md:text-[20px] font-bold border-black uppercase'>Overview</button>
            </div>
            <div className='flex items-center justify-end'>
                <img  className=' bg-cover' src={lap} alt="" />
            </div>
        </div>
        <div className='grid
         sm:grid-cols-3 pr-4 gap-4 sm:my-12'>
            <div className='w-full bg-cover hover:scale-90 duration-500 ease-in-out  bg-center  rounded-lg' style={{backgroundImage:`url(${unicorn}) `}}>
            <button className='px-2 mx-4  text-white bg-black my-3 py-0 text-[7px] rounded-full border-2 md:text-[12px] font-bold border-white uppercase'>Overview</button>
            <h1 className='text-center py-4 text-[28px] sm:text-[28px] text-white font-bold pb-12'><span className='text-emerald-500'>Z</span> BET</h1>
            </div>
            <div className='w-full bg-cover hover:scale-90 duration-500 ease-in-out   bg-center  rounded-lg' style={{backgroundImage:`url(${Cardimg2}) `}}>
            <h1 className='text-center flex items-center justify-center mx-auto px-3 w-fit my-4  text-[21px] sm:text-[23px]   font-bold mt-12 py-1 rounded-md text-black bg-green-400 '>NFT NYC BETA</h1>
            <div className='flex items-end justify-end'>

            <button className=' mx-4  text-white  my-3    text-[7px] rounded-xl  md:text-[22px] font-bold border-white uppercase'>02_state</button>
            </div>

            </div><div className='w-full hover:scale-90 duration-500 ease-in-out  bg-cover  bg-center  rounded-lg' style={{backgroundImage:`url(${Cardimg3}) `}}>
            <h1 className='text-center flex items-center justify-center mx-auto px-3 w-fit my-4  text-[21px] md:text-[20px] lg:text-[23px]   font-bold mt-12 py-1 rounded-md text-white bg-black '>SEASON REWARDS</h1>
            <div className='flex items-end justify-end'>
            <button className=' mx-4  text-white  my-3  text-[7px] rounded-xl  md:text-[22px] font-bold border-white uppercase'>02_state</button>

            </div>
            </div>
        </div>

    </div>
    <div className='bg-cover w-full my-4 sm:my-8 sm:h-[500px] md:h-[700px] rounded-xl bg-center  h-[300px]' style={{backgroundImage:`url(${Bgdiv})`, }}>
        <div>
            <h1>rising the bar for web 3.0 esports</h1>
            <div>
                <h1></h1>
                <h1></h1>
                <h1></h1>
            </div>
            <p></p>
            <button></button>
        </div>
    </div>
    </div>
  )
}
