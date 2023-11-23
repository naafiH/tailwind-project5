import Cards from "../cards/cards"
import game1 from "../assets/game1.png"
import game2 from "../assets/game2.jpg"
import game3 from "../assets/gamexbox.jpeg"
import game4 from "../assets/game4.png"

export default function featured() {
  return (
    <div>
      <Cards />
        <div className='max-w-[1280px] mx-auto'>
        <h3 className='font-font1 uppercase text-center font-bold text-green-500 sm:text-left text-[17px]  sm:text-[26px]'>Roadmap</h3>
        <h1 className='text-[20px] capitalize text-center sm:text-[33px] sm:text-left sm:max-w-[400px]'>Discover the Perion saga, past, present & future</h1>
        <div className='py-5 flex flex-wrap gap-4 justify-evenly items-center'>
          <div className='flex flex-col justify-center items-center'> 
            <div className='w-[300px] bg-cover bg-center h-[450px] rounded-xl flex justify-center items-end '  style={{backgroundImage:`url(${game1})`}}>
              <div className='mx-2 my-2 rounded-lg px-3 py-4 shadow-md shadow-slate-900 '>
                <h1 className='text-[23px]  uppercase font-bold'>the genesis</h1>
                <p className='text-[13px]  py-2'>perion co writer amos whitewolf discovers axe infinity, begin to dominate the global leaderboard. ranking #1 over four weeks,</p>
              </div>
            </div>
            <div className='w-[3px] h-[15px] mt-5  bg-white '></div>
            <h1 className='font-bold text-[10px] py-3'>Feb'21</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-[300px] bg-cover bg-center h-[450px] rounded-xl flex justify-center items-end'  style={{backgroundImage:`url(${game2})`}}>
              <div className='mx-2 my-2 rounded-lg px-3 py-4 shadow-md shadow-slate-900 '>
                <h1 className='text-[23px]  uppercase font-bold'>a new market</h1>
                <p className='text-[13px]  py-2'>recognising a gap in the market, amos uses his expirience to breed the most in demand axias . Jan and Mitch joins bootstrapping operations</p>
              </div>
            </div>
            <div className='w-[3px] h-[15px] mt-5  bg-white '></div>
            <h1 className='font-bold text-[10px] py-3'>Apr'21</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-[300px] bg-cover bg-center h-[450px] rounded-xl flex justify-center items-end'  style={{backgroundImage:`url(${game3})`}}>
              <div className='mx-2 my-2 rounded-lg px-3 py-4 shadow-md shadow-slate-900 '>
                <h1 className='text-[23px]  uppercase font-bold'>perion is born</h1>
                <p className='text-[13px]  py-2'>perion co writer amos whitewolf discovers axe infinity, begin to dominate the global leaderboard. begin to dominate the global leaderboard. ranking #1 over four weeks,</p>
              </div>
            </div>
            <div className='w-[3px] h-[15px] mt-5  bg-white '></div>
            <h1 className='font-bold text-[10px] py-3'>Sep'21</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-[300px] bg-cover bg-center h-[450px] rounded-xl flex justify-center items-end'  style={{backgroundImage:`url(${game4})`}}>
              <div className='mx-2 my-2 rounded-lg px-3 py-4 shadow-md shadow-slate-900 '>
                <h1 className='text-[23px]  uppercase font-bold'>the power of communication</h1>
                <p className='text-[13px]  py-2'>perion co writer amos whitewolf discovers axe infinity,recognising a gap in the market, amos uses his expirience to breed the most in demand axias begin to dominate the global leaderboard. ranking #1 over four weeks,</p>
              </div>
            </div>
            <div className='w-[3px] h-[15px] mt-5  bg-white '></div>
            <h1 className='font-bold text-[10px] py-3'>Nov'21</h1>
          </div>
        </div>
        </div>
    </div>
  )
}
